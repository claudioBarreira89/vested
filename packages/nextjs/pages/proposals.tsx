import type { NextPage } from "next";
import { Address } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
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
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">All Live Proposals</span>
          </h1>
          <div className="flex flex-col gap-10">
            {proposals.map(proposal => (
              <Proposal
                key={proposal.contractAddress}
                proposal={proposal}
                onVoteForClick={onVoteForClick}
                onVoteAgainstClick={onVoteAgainstClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals;
