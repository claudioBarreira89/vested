import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LoadingPage from "./LoadingPage";
import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import { toast } from "react-hot-toast";
import { Abi } from "viem";
import { useAccount } from "wagmi";
import { readContract } from "wagmi/actions";
import vestingAbi from "~~/utils/abi/vestingAbi";
import { VESTING_CONTRACT_ADDRESS } from "~~/utils/constants";

const Protected = ({ children }: any) => {
  const router = useRouter();

  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [hasNFT, setHasNFT] = useState(true);
  const [hasVesting, setHasVesting] = useState(true);
  const [hasWorldId, setHasWorldId] = useState(false);

  const verifyNFT = () => {
    /**
     * This function will verify if the user has the NFT
     */

    return true;
  };

  const verifyVesting = useCallback(async () => {
    if (!address) return false;
    /**
     * This function verifies if the user has an active vesting schedule
     */

    try {
      const data = await readContract({
        address: VESTING_CONTRACT_ADDRESS,
        abi: vestingAbi as Abi,
        functionName: "getClaim",
        args: [address],
      });
      const { isActive } = data as { isActive: boolean };
      return isActive;
    } catch (err) {
      toast.error("Something went wrong");
      return false;
    }
  }, [address]);

  const verifyWorldCoin = async (result: ISuccessResult) => {
    const reqBody = {
      merkle_root: result.merkle_root,
      nullifier_hash: result.nullifier_hash,
      proof: result.proof,
      credential_type: result.credential_type,
      action: "parisnotif",
      signal: "",
    };

    return fetch("/api/worldcoin/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }).then(async (res: Response) => {
      return new Promise<void>((resolve, reject) => {
        if (res.status !== 200) {
          toast.error("Error happend! Maybe you are not verified with Orb?");
          reject("Verification failed");
          console.error("Verification failed");
        }

        console.log("Successfully verified credential.");
        resolve();
      });
    });
  };

  const onSuccess = () => {
    toast.success("Great Sucess! you are a human!");
    localStorage.setItem("worldId", "1");
    setHasWorldId(true);
    setAuthorized(true);
  };

  const authCheck = useCallback(
    async (url: string) => {
      setIsLoading(true);

      const hasVestingSchedule = await verifyVesting();
      const path = url.split("?")[0].split("#")[0];

      if (!verifyNFT()) {
        setAuthorized(false);
        setHasNFT(false);
        setIsLoading(false);
        return;
      }

      if (["/proposals"].includes(path) && !hasVestingSchedule) {
        setAuthorized(false);
        setHasVesting(false);
        setIsLoading(false);
        return;
      }

      if (!hasWorldId) {
        setAuthorized(false);
        setIsLoading(false);
        setHasWorldId(false);
        return;
      }

      setHasWorldId(true);
      setIsLoading(false);
      setAuthorized(true);
      setHasVesting(true);
    },
    [verifyVesting],
  );

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [authCheck, router.asPath, router.events]);

  useEffect(() => {
    const worldId = localStorage.getItem("worldId");
    console.log(worldId);
    if (!worldId) return;
    setHasWorldId(true);
    setAuthorized(true);
  });

  if (isLoading) return <LoadingPage />;

  if (!address) {
    return (
      <div className="flex items-center flex-col flex-grow pt-24 max-w-5xl w-full m-auto h-full ">
        <main className="p-6 w-full">
          <h1 className="text-6xl font-semibold flex gap-4 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
              Connect your wallet
            </span>
            🚀
          </h1>

          <div className="text-3xl my-8">You need to first connect your wallet to start this epic journey!</div>

          <div className="flex flex-col items-center w-full gap-6">
            <Link
              href="/"
              type="button"
              className="bg-blue-600 text-white text-2xl px-4 py-2 rounded hover:bg-blue-700 text-center w-96 m-auto mt-10"
            >
              Go to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  if (!hasNFT) {
    return (
      <div className="flex items-center flex-col flex-grow pt-24 max-w-5xl w-full m-auto h-full ">
        <main className="p-6 w-full">
          <h1 className="text-6xl font-semibold flex gap-4 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
              Why no NFT?
            </span>
            🥺
          </h1>
          <div className="text-3xl my-8">
            Looks like you haven&apos;t minted the DAO&apos;s NFT yet. Go to the minting page and mint your own NFT to
            have full access to the DAO!
          </div>
          <div className="flex flex-col items-center w-full gap-6">
            <Link
              href="/mint"
              type="button"
              className="bg-purple-600 text-white text-2xl px-4 py-2 rounded hover:bg-purple-700 text-center w-96 m-auto mt-10"
            >
              Mint NFT
            </Link>

            <Link
              href="/"
              type="button"
              className="bg-blue-600 text-white text-2xl px-4 py-2 rounded hover:bg-blue-700 text-center w-96 m-auto"
            >
              Go to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  if (!hasVesting) {
    return (
      <div className="flex items-center flex-col flex-grow pt-24 max-w-5xl w-full m-auto h-full ">
        <main className="p-6 w-full">
          <h1 className="text-6xl font-semibold flex gap-4 mb-4">
            <span className="pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
              Go get your vesting!
            </span>
            💰
          </h1>
          <div className="text-3xl my-8">
            Create your vesting schedule in order to be rewarded every time you interact with the community!
          </div>
          <div className="flex flex-col items-center w-full gap-6">
            <Link
              href="/vesting"
              type="button"
              className="bg-purple-600 text-white text-2xl px-4 py-2 rounded hover:bg-purple-700 text-center w-96 m-auto mt-10"
            >
              Create vesting schedule
            </Link>

            <Link
              href="/"
              type="button"
              className="bg-blue-600 text-white text-2xl px-4 py-2 rounded hover:bg-blue-700 text-center w-96 m-auto"
            >
              Go to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  if (!hasWorldId) {
    return (
      <div className="flex items-center flex-col flex-grow pt-24 max-w-5xl w-full m-auto h-full ">
        <main className="p-6 w-full">
          <h1 className="text-6xl font-semibold flex gap-4 mb-4">
            <span className="pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
              Go get your WorldCoin Login!
            </span>
            💰
          </h1>
          <div className="text-3xl my-8">You need to be a verified human to go onto this page</div>
          <div className="flex flex-col items-center w-full gap-6">
            <IDKitWidget
              app_id={process.env.NEXT_PUBLIC_WORLDCOIN_ID!} // obtained from the Developer Portal
              action="parisnotif" // this is your action name from the Developer Portal
              onSuccess={onSuccess}
              handleVerify={verifyWorldCoin}
              enableTelemetry // optional, defaults to false
            >
              {({ open }) => (
                <button
                  type="button"
                  className="bg-blue-600 text-white text-2xl px-4 py-2 rounded hover:bg-blue-700 text-center w-96 m-auto pointer"
                  onClick={open}
                >
                  Verify with World ID
                </button>
              )}
            </IDKitWidget>
          </div>
        </main>
      </div>
    );
  }

  return authorized && children;
};

export default Protected;
