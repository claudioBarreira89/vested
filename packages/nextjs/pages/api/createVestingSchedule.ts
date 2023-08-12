import { ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";
import vestingAbi from "~~/utils/abi/vestingAbi";

type ResData = {
  error?: string;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  if (req.method !== "POST") return res.status(404).json({ error: "request method not found" });
  const { address }: { address: string } = req.body;

  const privateKey = process.env.DEPLOYER_PRIVATE_KEY;

  //Check if vesting schedule is already present
  //Check if the user has the NFT
  //Checl WorldCoin ID
  if (!privateKey) return res.status(500).json({ error: `No admin wallet PK provided. ${privateKey}` });
  if (!address) return console.error("No recipient address provided");

  //Vesting Settings
  const _recipient = "0xa91d405230bd93d873c98c9ED96285775ec1dC1A";
  const _startTimestamp = Math.floor(Date.now() / 1000); // today
  console.log("_startTimestamp: ", _startTimestamp);
  const _endTimestamp = _startTimestamp + 2592000; // 1 Month (30 days) days after today
  console.log("_endTimestamp: ", _endTimestamp);
  const _cliffReleaseTimestamp = _startTimestamp;
  const _releaseIntervalSecs = 60;
  const _linearVestAmount = 100;
  const _cliffAmount = 24;

  try {
    const provider = new ethers.JsonRpcProvider(process.env.OPGOERLI_RPC_URL || "");
    const signer = new ethers.Wallet(privateKey, provider);
    const vesting = new ethers.Contract("0x1b205683a69B0F167F738Bf4F41791Db27c1114a", vestingAbi, signer);

    console.log(
      "Tokens to have on vesting contract address before creating the claim:",
      _cliffAmount + _linearVestAmount,
    );
    console.log("Creating the claim...");

    const res = await vesting.createClaim(
      _recipient,
      _startTimestamp,
      _endTimestamp,
      _cliffReleaseTimestamp,
      _releaseIntervalSecs,
      _linearVestAmount,
      _cliffAmount,
      {
        gasLimit: 200000,
      },
    );

    console.log(res);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err });
  }

  return res.status(200).json({ message: "Successfully edited an event listeners." });
}
