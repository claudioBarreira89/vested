/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC165Upgradeable0810,
  IERC165Upgradeable0810Interface,
} from "../../IERC165Upgradeable.sol/IERC165Upgradeable0810";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IERC165Upgradeable0810__factory {
  static readonly abi = _abi;
  static createInterface(): IERC165Upgradeable0810Interface {
    return new utils.Interface(_abi) as IERC165Upgradeable0810Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC165Upgradeable0810 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC165Upgradeable0810;
  }
}
