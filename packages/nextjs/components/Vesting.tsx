import { useState } from "react";
import LoadingPage from "./LoadingPage";
import axios from "axios";
import moment from "moment";
import toast from "react-hot-toast";
import { Abi } from "viem";
import { useAccount, useContractRead } from "wagmi";
import vestingAbi from "~~/utils/abi/vestingAbi";
import { isLegitimateWallet } from "~~/utils/common";
import { VESTING_CONTRACT_ADDRESS } from "~~/utils/constants";

interface IVesting {
  amountWithdrawn: bigint;
  cliffAmount: bigint;
  cliffReleaseTimestamp: number;
  deactivationTimestamp: number;
  endTimestamp: number;
  isActive: boolean;
  linearVestAmount: bigint;
  releaseIntervalSecs: number;
  startTimestamp: number;
}

const Vesting = () => {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);

  const { data = {}, isLoading } = useContractRead({
    address: VESTING_CONTRACT_ADDRESS,
    abi: vestingAbi as Abi,
    functionName: "getClaim",
    args: [address],
  });

  const { isActive, startTimestamp, endTimestamp, cliffAmount, amountWithdrawn, linearVestAmount } = data as IVesting;

  const createVestingSchedule = async () => {
    const isLegit = await isLegitimateWallet();

    setLoading(true);
    try {
      if (!isLegit) return toast.error("You must sign your wallet to start a vesting.");
      const headers = { "Content-Type": "application/json" };
      await axios.post("/api/createVestingSchedule", { address: address }, { headers });
      toast.success("Great Success! your vesting schedule has been created.");
    } catch (error: any) {
      console.log("here");
      toast.error("Something went wrong creating your vesting schedule.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const currentTimestamp = moment().unix();
  const progress = isActive ? ((currentTimestamp - startTimestamp) / (endTimestamp - startTimestamp)) * 100 : 0;

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex items-center flex-col flex-grow pt-10 max-w-5xl m-auto w-full">
      <main className="p-6 w-full">
        <h2 className="text-center">
          <span className="text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
            Vesting schedule
          </span>
        </h2>

        {isActive ? (
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex gap-4 mt-5">
              <div className="card bg-base-100 shadow-xl m-auto w-full">
                <div className="card-body">
                  <h2 className="text-2xl font-bold">Total amount</h2>
                  <div className="text-4xl">{linearVestAmount.toString()}</div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl m-auto w-full">
                <div className="card-body">
                  <h2 className="text-2xl font-bold">Cliff amount</h2>
                  <div className="text-4xl">{cliffAmount.toString()}</div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl m-auto w-full">
                <div className="card-body">
                  <h2 className="text-2xl font-bold">Withdrawn amount</h2>
                  <div className="text-4xl">{amountWithdrawn.toString()}</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl m-auto w-full">
              <div className="card-body">
                <h2 className="text-2xl font-bold">Schedule</h2>

                <div className="h-2 w-full bg-blue-200 rounded-lg overflow-hidden">
                  <div className="h-full w-1/2 bg-purple-500 rounded-lg" style={{ width: progress + "%" }} />
                </div>

                <div className="flex justify-between">
                  <div className="text-lg">{moment.unix(startTimestamp).format("DD/MM/YYYY")}</div>
                  <div className="text-lg">{moment.unix(endTimestamp).format("DD/MM/YYYY")}</div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        ) : (
          <div className="card bg-base-100 shadow-xl mt-10 max-w-2xl m-auto">
            <div className="card-body">
              <p className="text-2xl m-0">Begin by setting up your vesting schedule.</p>
              <p className="text-xl my-4">
                This grants you complete DAO access, empowering you to create your own proposals or vote on
                others&apos;. Each interaction reduces your vesting cliff time.
              </p>
              <div className="card-actions w-full flex">
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => createVestingSchedule()}
                  className="bg-purple-600 mt-5 flex-1 text-white px-4 py-2 rounded hover:bg-purple-700 text-center cursor-pointer"
                >
                  Create vesting schedule
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Vesting;
