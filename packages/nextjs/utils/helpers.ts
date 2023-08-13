import { isAddress } from "viem";

export function shortenAddress(address: string, chars = 4, validate = true) {
  if (!address) {
    return "";
  }

  if (/\.eth$/.test(address)) {
    return address;
  }

  let parsed = "";
  if (validate) {
    if (!isAddress(address)) {
      //console.error(`Invalid 'address' parameter '${address}'.`)
      return "";
    }
  } else {
    parsed = address;
  }
  return chars * 2 + 2 > parsed.length ? parsed : `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}
