import type { NextPage } from "next";
import { Address } from "wagmi";
import { PlusIcon } from "@heroicons/react/24/outline";
import Proposal from "~~/components/proposal/Proposal";
import { proposals } from "~~/utils/constants";

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

export interface Proposal {
  id: string;
  title: string;
  description: string;
  contractAddress: Address;
}

const Proposals: NextPage = () => {
  const onVoteForClick = () => {
    console.log("voted");
  };

  const onVoteAgainstClick = () => {
    console.log("voted");
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10 max-w-5xl m-auto w-full">
      <main className="p-6 w-full">
        <h2 className="text-center">
          <span className="text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
            Proposals
          </span>
        </h2>

        <button className="bg-purple-600 mt-10 flex-1 text-white px-4 py-2 rounded hover:bg-purple-700 text-center flex gap-2 justify-center">
          <PlusIcon className="w-6 h-6" /> Create new Proposal
        </button>

        <div className="flex flex-col gap-10 mt-10">
          {proposals.map(proposal => (
            <Proposal
              key={proposal.contractAddress}
              proposal={proposal}
              onVoteForClick={onVoteForClick}
              onVoteAgainstClick={onVoteAgainstClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Proposals;
