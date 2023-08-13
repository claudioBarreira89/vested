const contracts = {
  420: [
    {
      chainId: "420",
      name: "optimismGoerli",
      contracts: {
        Congress: {
          address: "0x2C597aBB1F05Ff1475808f4bec993be9AcdEe99D",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "voter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "proposalId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "enum Congress.VoteChoice",
                  name: "choice",
                  type: "uint8",
                },
              ],
              name: "Voted",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "durationInDays",
                  type: "uint256",
                },
              ],
              name: "createProposal",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "proposalId",
                  type: "uint256",
                },
              ],
              name: "executeProposal",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getProposals",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votesInFavor",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "votesAgainst",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "executed",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "endDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "durationInDays",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Congress.Proposal[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getProposalsCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getUnvotedProposals",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votesInFavor",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "votesAgainst",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "executed",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "endDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "durationInDays",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Congress.Proposal[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "proposals",
              outputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votesInFavor",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "votesAgainst",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "executed",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "durationInDays",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "proposalId",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "inFavor",
                  type: "bool",
                },
              ],
              name: "vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "votes",
              outputs: [
                {
                  internalType: "enum Congress.VoteChoice",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        DAOToken: {
          address: "0xd1987AF36614c45362dCACcE1c9Fc73849678cb7",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name_",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol_",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "initialSupply_",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        TokenVesting: {
          address: "0x616334733c4543e714DcEf015e6300f254A6b1a1",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_tokenAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_admin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "_enabled",
                  type: "bool",
                },
              ],
              name: "AdminAccessSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_amountRequested",
                  type: "uint256",
                },
              ],
              name: "AdminWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "uint40",
                      name: "startTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "endTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "cliffReleaseTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "releaseIntervalSecs",
                      type: "uint40",
                    },
                    {
                      internalType: "uint256",
                      name: "linearVestAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountWithdrawn",
                      type: "uint256",
                    },
                    {
                      internalType: "uint112",
                      name: "cliffAmount",
                      type: "uint112",
                    },
                    {
                      internalType: "bool",
                      name: "isActive",
                      type: "bool",
                    },
                    {
                      internalType: "uint40",
                      name: "deactivationTimestamp",
                      type: "uint40",
                    },
                  ],
                  indexed: false,
                  internalType: "struct TokenVesting.Claim",
                  name: "_claim",
                  type: "tuple",
                },
              ],
              name: "ClaimCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_numTokensWithheld",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "revocationTimestamp",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "uint40",
                      name: "startTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "endTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "cliffReleaseTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "releaseIntervalSecs",
                      type: "uint40",
                    },
                    {
                      internalType: "uint256",
                      name: "linearVestAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountWithdrawn",
                      type: "uint256",
                    },
                    {
                      internalType: "uint112",
                      name: "cliffAmount",
                      type: "uint112",
                    },
                    {
                      internalType: "bool",
                      name: "isActive",
                      type: "bool",
                    },
                    {
                      internalType: "uint40",
                      name: "deactivationTimestamp",
                      type: "uint40",
                    },
                  ],
                  indexed: false,
                  internalType: "struct TokenVesting.Claim",
                  name: "_claim",
                  type: "tuple",
                },
              ],
              name: "ClaimRevoked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_withdrawalAmount",
                  type: "uint256",
                },
              ],
              name: "Claimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint40",
                  name: "newEndTimestamp",
                  type: "uint40",
                },
              ],
              name: "UserEndTimeReduced",
              type: "event",
            },
            {
              inputs: [],
              name: "allVestingRecipients",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "amountAvailableToWithdrawByAdmin",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
              ],
              name: "claimableAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  internalType: "uint40",
                  name: "_startTimestamp",
                  type: "uint40",
                },
                {
                  internalType: "uint40",
                  name: "_endTimestamp",
                  type: "uint40",
                },
                {
                  internalType: "uint40",
                  name: "_cliffReleaseTimestamp",
                  type: "uint40",
                },
                {
                  internalType: "uint40",
                  name: "_releaseIntervalSecs",
                  type: "uint40",
                },
                {
                  internalType: "uint112",
                  name: "_linearVestAmount",
                  type: "uint112",
                },
                {
                  internalType: "uint112",
                  name: "_cliffAmount",
                  type: "uint112",
                },
              ],
              name: "createClaim",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_recipients",
                  type: "address[]",
                },
                {
                  internalType: "uint40[]",
                  name: "_startTimestamps",
                  type: "uint40[]",
                },
                {
                  internalType: "uint40[]",
                  name: "_endTimestamps",
                  type: "uint40[]",
                },
                {
                  internalType: "uint40[]",
                  name: "_cliffReleaseTimestamps",
                  type: "uint40[]",
                },
                {
                  internalType: "uint40[]",
                  name: "_releaseIntervalsSecs",
                  type: "uint40[]",
                },
                {
                  internalType: "uint112[]",
                  name: "_linearVestAmounts",
                  type: "uint112[]",
                },
                {
                  internalType: "uint112[]",
                  name: "_cliffAmounts",
                  type: "uint112[]",
                },
              ],
              name: "createClaimsBatch",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
              ],
              name: "finalClaimableAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
              ],
              name: "finalVestedAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
              ],
              name: "getClaim",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint40",
                      name: "startTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "endTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "cliffReleaseTimestamp",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "releaseIntervalSecs",
                      type: "uint40",
                    },
                    {
                      internalType: "uint256",
                      name: "linearVestAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountWithdrawn",
                      type: "uint256",
                    },
                    {
                      internalType: "uint112",
                      name: "cliffAmount",
                      type: "uint112",
                    },
                    {
                      internalType: "bool",
                      name: "isActive",
                      type: "bool",
                    },
                    {
                      internalType: "uint40",
                      name: "deactivationTimestamp",
                      type: "uint40",
                    },
                  ],
                  internalType: "struct TokenVesting.Claim",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "vesteeAddress",
                  type: "address",
                },
              ],
              name: "getUserEndTimestamp",
              outputs: [
                {
                  internalType: "uint40",
                  name: "",
                  type: "uint40",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_addressToCheck",
                  type: "address",
                },
              ],
              name: "isAdmin",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numTokensReservedForVesting",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numVestingRecipients",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "vesteeAddress",
                  type: "address",
                },
              ],
              name: "reduceVesteeCliffTime",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
              ],
              name: "revokeClaim",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "admin",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "isEnabled",
                  type: "bool",
                },
              ],
              name: "setAdmin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "tokenAddress",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  internalType: "uint40",
                  name: "_referenceTs",
                  type: "uint40",
                },
              ],
              name: "vestedAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amountRequested",
                  type: "uint256",
                },
              ],
              name: "withdrawAdmin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_otherTokenAddress",
                  type: "address",
                },
              ],
              name: "withdrawOtherToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0xD1f026f341eB8c11a56e720471A616356CC196Cc",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
