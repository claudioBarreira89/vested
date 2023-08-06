// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Congress {
	struct Proposal {
		string description;
		uint voteCount;
		bool executed;
		mapping(address => bool) hasVoted;
	}

	Proposal[] public proposals;

	function createProposal(string memory description) public {
		Proposal storage newProposal = proposals.push();
		newProposal.description = description;
	}

	function vote(uint proposalId) public {
		require(proposalId < proposals.length, "Invalid proposal ID.");
		require(
			!proposals[proposalId].executed,
			"Proposal has already been executed."
		);
		require(
			!proposals[proposalId].hasVoted[msg.sender],
			"You have already voted on this proposal."
		);

		proposals[proposalId].voteCount += 1;
		proposals[proposalId].hasVoted[msg.sender] = true;
	}

	function executeProposal(uint proposalId) public {
		require(proposalId < proposals.length, "Invalid proposal ID.");
		require(
			!proposals[proposalId].executed,
			"Proposal has already been executed."
		);
		require(
			proposals[proposalId].voteCount > (address(this).balance / 2),
			"Not enough votes."
		);

		proposals[proposalId].executed = true;
	}

	function getProposalsCount() public view returns (uint) {
		return proposals.length;
	}
}
