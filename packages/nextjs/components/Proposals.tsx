import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { toast } from "react-hot-toast";
import { Abi } from "viem";
import { useContractRead } from "wagmi";
import { prepareWriteContract, waitForTransaction, writeContract } from "wagmi/actions";
import { PlusIcon } from "@heroicons/react/24/outline";
import Proposal from "~~/components/proposal/Proposal";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";

/*
TODOS:
V1
  - On user login set up a WS for specific events.
  - On vote button click send the vote to smart contract.
  - Once necessary event received call the vesting smart contract to reduce the cliff.
  - Update the frontend once WS receives cliff reduce event.

  - Get all proposals that are currenlty live and user has not voted on.
  - Listen for their vote event
  - On the event trigger the frontend popup
  - On page close close the web socket
*/

export interface IProposal {
  id: number;
  title: string;
  description: string;
}

const Proposals = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");
  const [isVoting, setIsVoting] = useState({});
  const [isCreating, setIsCreating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [Congress] = getContractNames();

  const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo(Congress);

  const {
    data: proposals,
    refetch,
    isLoading: isFetchingProposals,
  } = useContractRead({
    address: deployedContractData?.address,
    abi: deployedContractData?.abi as Abi,
    functionName: "getUnvotedProposals",
  });

  const handleVoteTransaction = async (proposalId: number, inFavor: boolean) => {
    if (!deployedContractData) return;

    setIsVoting(state => ({
      ...state,
      [proposalId]: true,
    }));

    try {
      const { request } = await prepareWriteContract({
        address: deployedContractData?.address,
        abi: deployedContractData?.abi as Abi,
        functionName: "vote",
        args: [proposalId, inFavor],
      });

      const { hash } = await writeContract(request);

      await waitForTransaction({ hash });

      setIsVoting(state => ({
        ...state,
        [proposalId]: false,
      }));
      refetch();
    } catch (err) {
      toast.error("Something went wrong");
      setIsVoting(false);
    }
  };

  const handleCreateProposalTransaction = async () => {
    if (!deployedContractData) return;

    setIsCreating(true);

    try {
      const { request } = await prepareWriteContract({
        address: deployedContractData?.address,
        abi: deployedContractData?.abi as Abi,
        functionName: "createProposal",
        args: [title, description, parseInt(durationInDays)],
      });

      const { hash } = await writeContract(request);

      await waitForTransaction({ hash });

      setIsCreating(false);
      setIsModalOpen(false);
      refetch();
    } catch (err) {
      toast.error("Something went wrong");
      setIsVoting(false);
    }
  };

  useEffect(() => {
    setTitle("");
    setDescription("");
    setDurationInDays("");
  }, [isModalOpen]);

  if (deployedContractLoading || isFetchingProposals) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10 max-w-5xl m-auto w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 max-w-5xl m-auto w-full">
        <main className="p-6 w-full">
          <h2 className="text-center">
            <span className="text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
              Proposals
            </span>
          </h2>

          <button
            className="bg-purple-600 mt-10 flex-1 text-white px-4 py-2 rounded hover:bg-purple-700 text-center flex gap-2 justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            <PlusIcon className="w-6 h-6" /> Create new Proposal
          </button>

          {(proposals as IProposal[])?.length === 0 ? (
            <div className="mt-10">
              <div className="mb-8 items-center border-2 p-6 rounded-lg  shadow flex flex-col justify-between">
                <span className="text-xl">No Proposals available</span>
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-10 mt-10">
            {(proposals as IProposal[])?.map(proposal => (
              <Proposal
                key={proposal.id}
                proposal={proposal}
                onVoteForClick={() => handleVoteTransaction(proposal.id, true)}
                onVoteAgainstClick={() => handleVoteTransaction(proposal.id, false)}
                isLoading={!!isVoting?.[proposal.id as keyof typeof isVoting]}
              />
            ))}
          </div>
        </main>
      </div>

      <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box w-full max-w-xl flex items-center flex-col">
          <div className="flex flex-col gap-2 w-full">
            <div className="text-2xl mb-5">New Proposal</div>

            <input
              type="text"
              value={title}
              placeholder="Title"
              className="rounded input input-bordered w-full"
              onChange={e => setTitle(e.target.value)}
            />
            <input
              type="text"
              value={description}
              placeholder="Description"
              className="rounded input input-bordered w-full"
              onChange={e => setDescription(e.target.value)}
            />
            <input
              type="number"
              value={durationInDays}
              placeholder="Duration in days"
              className="rounded input input-bordered w-full"
              onChange={e => setDurationInDays(e.target.value)}
            />
          </div>

          <div className="flex gap-4 flex-col w-1/2 mt-10">
            {isCreating ? (
              <div className="w-full flex justify-center">
                <Spinner />
              </div>
            ) : (
              <>
                <button
                  className="bg-purple-600 flex-1 text-white px-4 py-2 rounded hover:bg-purple-700 text-center"
                  onClick={() => handleCreateProposalTransaction()}
                >
                  Submit
                </button>
                <button
                  className="bg-blue-600 flex-1 px-4 py-2 rounded hover:bg-blue-700 text-center"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals;
