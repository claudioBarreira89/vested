import { Button } from "antd";
import { Proposal as IProposal } from "~~/pages/proposals";

interface ProposalProps {
  onVoteForClick: () => void;
  onVoteAgainstClick: () => void;
  proposal: IProposal;
}

const Proposal = ({ onVoteForClick, onVoteAgainstClick, proposal }: ProposalProps) => {
  return (
    <div>
      <h2>{proposal.title}</h2>
      <p>{proposal.description}</p>
      <div className="flex gap-3">
        <Button className="bg-green-600" type="primary" htmlType="button" onClick={() => onVoteForClick()}>
          Vote For
        </Button>
        <Button className="bg-red-600" type="primary" htmlType="button" onClick={() => onVoteAgainstClick()}>
          Vote Against
        </Button>
      </div>
    </div>
  );
};

export default Proposal;
