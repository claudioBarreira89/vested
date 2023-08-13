import { ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";
import vestingAbi from "~~/utils/abi/vestingAbi";
import { VESTING_CONTRACT_ADDRESS } from "~~/utils/constants";

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
  const _recipient = address;
  const _startTimestamp = Math.floor(Date.now() / 1000); // today
  const _endTimestamp = _startTimestamp + 10368000; // 4 Months (30 days) days after today
  const _cliffReleaseTimestamp = _startTimestamp;
  const _releaseIntervalSecs = 60;
  const _linearVestAmount = 100;
  const _cliffAmount = 24;

  try {
    const provider = new ethers.JsonRpcProvider(process.env.OPGOERLI_RPC_URL || "");
    const signer = new ethers.Wallet(privateKey, provider);
    const vesting = new ethers.Contract(VESTING_CONTRACT_ADDRESS, vestingAbi, signer);

    console.log(
      "Tokens to have on vesting contract address before creating the claim:",
      _cliffAmount + _linearVestAmount,
    );
    console.log("Creating the claim...");

    await vesting.createClaim(
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
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err });
  }

  return res.status(200).json({ message: "Successfully edited an event listeners." });
}
