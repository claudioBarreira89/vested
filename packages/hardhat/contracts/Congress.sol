// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Congress {
	struct Proposal {
		string description;
		uint votesInFavor;
		uint votesAgainst;
		bool executed;
		uint endDate;
		uint durationInDays;
		mapping(address => VoteChoice) hasVoted;
	}

	enum VoteChoice {
		NotVoted,
		InFavor,
		Against
	}

	Proposal[] public proposals;

	event Voted(address indexed voter, uint proposalId, VoteChoice choice);

	function createProposal(
		string memory description,
		uint durationInDays
	) public {
		uint endDateTime = block.timestamp + (durationInDays * 1 days);
		Proposal storage newProposal = proposals.push();
		newProposal.description = description;
		newProposal.endDate = endDateTime;
		newProposal.durationInDays = durationInDays;
	}

	function vote(uint proposalId, bool inFavor) public {
		require(proposalId < proposals.length, "Invalid proposal ID.");
		require(
			block.timestamp <= proposals[proposalId].endDate,
			"Voting period has ended."
		);
		require(
			!proposals[proposalId].executed,
			"Proposal has already been executed."
		);
		require(
			proposals[proposalId].hasVoted[msg.sender] == VoteChoice.NotVoted,
			"You have already voted on this proposal."
		);

		if (inFavor) {
			proposals[proposalId].votesInFavor += 1;
			proposals[proposalId].hasVoted[msg.sender] = VoteChoice.InFavor;
		} else {
			proposals[proposalId].votesAgainst += 1;
			proposals[proposalId].hasVoted[msg.sender] = VoteChoice.Against;
		}

		emit Voted(
			msg.sender,
			proposalId,
			inFavor ? VoteChoice.InFavor : VoteChoice.Against
		);
	}

	function executeProposal(uint proposalId) public {
		require(proposalId < proposals.length, "Invalid proposal ID.");
		require(
			!proposals[proposalId].executed,
			"Proposal has already been executed."
		);

		proposals[proposalId].executed = true;
	}

	function getProposalsCount() public view returns (uint) {
		return proposals.length;
	}
}
