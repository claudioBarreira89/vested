import { getWalletClient } from "wagmi/actions";

export const isLegitimateWallet = async () => {
  try {
    const walletClient = await getWalletClient();
    if (!walletClient) return false;
    const sig = await walletClient.signMessage({
      message: {
        raw: "I am the wallet owner",
      },
    } as any);
    if (!sig) return false;
    return true;
  } catch (err: any) {
    console.log(err);
    return false;
  }
};
