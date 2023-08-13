import type { NextApiRequest, NextApiResponse } from "next";

export type Reply = {
  code: string;
};

const worldId = "app_staging_af1727f701f4304a9811cb7745e1cfa5";

export default function handler(req: NextApiRequest, res: NextApiResponse<Reply>) {
  const reqBody = {
    nullifier_hash: req.body.nullifier_hash,
    merkle_root: req.body.merkle_root,
    proof: req.body.proof,
    credential_type: req.body.credential_type,
    action: req.body.action,
    signal: req.body.signal,
  };
  console.log(reqBody);

  fetch(`https://developer.worldcoin.org/api/v1/verify/${process.env.NEXT_PUBLIC_WORLDCOIN_ID || worldId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  }).then(async verifyRes => {
    const wldResponse = await verifyRes.json();
    console.log(wldResponse);
    if (verifyRes.status == 200) {
      res.status(200).send({ code: wldResponse.code });
    } else {
      res.status(400).send({ code: wldResponse.code });
    }
  });
}
