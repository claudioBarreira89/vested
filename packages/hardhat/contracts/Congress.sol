// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Congress {
	struct Proposal {
		uint id;
		string title;
		string description;
		uint votesInFavor;
		uint votesAgainst;
		bool executed;
		uint endDate;
		uint durationInDays;
	}

	mapping(uint => mapping(address => VoteChoice)) public votes;

	enum VoteChoice {
		NotVoted,
		InFavor,
		Against
	}

	Proposal[] public proposals;

	event Voted(address indexed voter, uint proposalId, VoteChoice choice);

	function createProposal(
		string memory title,
		string memory description,
		uint durationInDays
	) public {
		uint endDateTime = block.timestamp + (durationInDays * 1 days);
		proposals.push(
			Proposal({
				id: proposals.length,
				title: title,
				description: description,
				votesInFavor: 0,
				votesAgainst: 0,
				executed: false,
				endDate: endDateTime,
				durationInDays: durationInDays
			})
		);
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
			votes[proposalId][msg.sender] == VoteChoice.NotVoted,
			"You have already voted on this proposal."
		);

		if (inFavor) {
			proposals[proposalId].votesInFavor += 1;
			votes[proposalId][msg.sender] = VoteChoice.InFavor;
		} else {
			proposals[proposalId].votesAgainst += 1;
			votes[proposalId][msg.sender] = VoteChoice.Against;
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

	function getProposals() public view returns (Proposal[] memory) {
		return proposals;
	}

	function getUnvotedProposals() public view returns (Proposal[] memory) {
		uint count = 0;

		for (uint i = 0; i < proposals.length; i++) {
			if (
				votes[i][msg.sender] == VoteChoice.NotVoted &&
				block.timestamp <= proposals[i].endDate &&
				!proposals[i].executed
			) {
				count++;
			}
		}

		Proposal[] memory unvotedProposals = new Proposal[](count);
		uint index = 0;

		for (uint i = 0; i < proposals.length; i++) {
			if (
				votes[i][msg.sender] == VoteChoice.NotVoted &&
				block.timestamp <= proposals[i].endDate &&
				!proposals[i].executed
			) {
				unvotedProposals[index] = proposals[i];
				index++;
			}
		}

		return unvotedProposals;
	}

	function getProposalsCount() public view returns (uint) {
		return proposals.length;
	}
}
