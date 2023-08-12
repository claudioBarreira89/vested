import { Proposal as IProposal } from "~~/components/Proposals";

interface ProposalProps {
  onVoteForClick: () => void;
  onVoteAgainstClick: () => void;
  proposal: IProposal;
}

const Proposal = ({ onVoteForClick, onVoteAgainstClick, proposal }: ProposalProps) => {
  return (
    <div className="card bg-base-100 shadow-xl m-auto">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-purple-500">{proposal.title}</h2>
        <p className="text-xl my-2">{proposal.description}</p>
        <div className="flex gap-3 mt-5">
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-center"
            onClick={() => onVoteForClick()}
          >
            Vote For
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
            onClick={() => onVoteAgainstClick()}
          >
            Vote Against
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
