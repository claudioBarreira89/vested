import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LoadingPage from "./LoadingPage";
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

  return authorized && children;
};

export default Protected;
