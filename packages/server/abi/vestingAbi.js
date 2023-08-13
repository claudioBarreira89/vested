const vestingAbi = [
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
];

export default vestingAbi;
