/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DropMetadataRendererTest,
  DropMetadataRendererTestInterface,
} from "../../DropMetadataRenderer.t.sol/DropMetadataRendererTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_SCRIPT",
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
    name: "IS_TEST",
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
    name: "failed",
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
    name: "mediaContract",
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
    name: "renderer",
    outputs: [
      {
        internalType: "contract DropMetadataRenderer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_SetupInitializes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_UninitalizesReverts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_UpdateURIsFromAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_UpdateURIsFromContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805462ff00ff19166201000117905534801561002157600080fd5b50613172806100316000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c806366b826ea11610081578063ecd8f4cb1161005b578063ecd8f4cb1461015d578063f8ccbf4714610165578063fa7626d41461017857600080fd5b806366b826ea1461012a5780638ada6b0f14610132578063ba414fa61461014557600080fd5b80633a768463116100b25780633a768463146100e0578063423c8d74146101185780634e21f9c01461012057600080fd5b80630a9254e4146100ce578063167b0bf9146100d8575b600080fd5b6100d6610185565b005b6100d66101e8565b6100fb737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d6610450565b6100fb6201e24081565b6100d6610c57565b6008546100fb906001600160a01b031681565b61014d611106565b604051901515815260200161010f565b6100d6611248565b60005461014d9062010000900460ff1681565b60005461014d9060ff1681565b604051610191906119d4565b604051809103906000f0801580156101ad573d6000803e3d6000fd5b50600880547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6040517fca669fa700000000000000000000000000000000000000000000000000000000815260126004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ca669fa790602401600060405180830381600087803b15801561024e57600080fd5b505af1158015610262573d6000803e3d6000fd5b5050604080517ff48448140000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d935063f48448149250600480830192600092919082900301818387803b1580156102cb57600080fd5b505af11580156102df573d6000803e3d6000fd5b505060085460405163c87b56dd60e01b8152600c60048201526001600160a01b03909116925063c87b56dd9150602401600060405180830381865afa15801561032c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103549190810190611a4d565b50604080517ff48448140000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d9163f484481491600480830192600092919082900301818387803b1580156103ba57600080fd5b505af11580156103ce573d6000803e3d6000fd5b50505050600860009054906101000a90046001600160a01b03166001600160a01b031663e8a3d4856040518163ffffffff1660e01b8152600401600060405180830381865afa158015610425573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261044d9190810190611a4d565b50565b600060405161045e906119e1565b604051809103906000f08015801561047a573d6000803e3d6000fd5b506040517fc4d259ad0000000000000000000000000000000000000000000000000000000081526101236004820152600160248201529091506001600160a01b0382169063c4d259ad90604401600060405180830381600087803b1580156104e157600080fd5b505af11580156104f5573d6000803e3d6000fd5b50506040517f06447d560000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d92506306447d569150602401600060405180830381600087803b15801561056757600080fd5b505af115801561057b573d6000803e3d6000fd5b5050505060006040516020016105f79060408082526010908201527f687474703a2f2f7572692e626173652f000000000000000000000000000000006060820152608060208201819052601d908201527f687474703a2f2f7572692e626173652f636f6e74726163742e6a736f6e00000060a082015260c00190565b60408051601f19818403018152908290526008547f856a7ffa0000000000000000000000000000000000000000000000000000000083529092506001600160a01b03169063856a7ffa9061064f908490600401611b26565b600060405180830381600087803b15801561066957600080fd5b505af115801561067d573d6000803e3d6000fd5b50506008805460405163c87b56dd60e01b8152600481019290925261073193506001600160a01b0316915063c87b56dd90602401600060405180830381865afa1580156106ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106f69190810190611a4d565b6040518060400160405280601181526020017f687474703a2f2f7572692e626173652f38000000000000000000000000000000815250611743565b600854604080517fe8a3d48500000000000000000000000000000000000000000000000000000000815290516107f8926001600160a01b03169163e8a3d4859160048083019260009291908290030181865afa158015610795573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107bd9190810190611a4d565b6040518060400160405280601d81526020017f687474703a2f2f7572692e626173652f636f6e74726163742e6a736f6e000000815250611743565b604080517f90c5013b0000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d916390c5013b91600480830192600092919082900301818387803b15801561085d57600080fd5b505af1158015610871573d6000803e3d6000fd5b50506040517fca669fa70000000000000000000000000000000000000000000000000000000081526101236004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d925063ca669fa79150602401600060405180830381600087803b1580156108dc57600080fd5b505af11580156108f0573d6000803e3d6000fd5b50506008546040517faf806d560000000000000000000000000000000000000000000000000000000081526001600160a01b03868116600483015260606024830152601460648301527f687474703a2f2f7572692e626173652e6e65772f000000000000000000000000608483015260a06044830152602160a48301527f687474703a2f2f7572692e626173652e6e65772f636f6e74726163742e6a736f60c48301527f6e0000000000000000000000000000000000000000000000000000000000000060e4830152909116925063af806d56915061010401600060405180830381600087803b1580156109e357600080fd5b505af11580156109f7573d6000803e3d6000fd5b50506040517fca669fa70000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d925063ca669fa79150602401600060405180830381600087803b158015610a6957600080fd5b505af1158015610a7d573d6000803e3d6000fd5b505060085460405163c87b56dd60e01b815260056004820152610b3193506001600160a01b03909116915063c87b56dd90602401600060405180830381865afa158015610ace573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610af69190810190611a4d565b6040518060400160405280601581526020017f687474703a2f2f7572692e626173652e6e65772f350000000000000000000000815250611743565b6040517fca669fa70000000000000000000000000000000000000000000000000000000081526001600160a01b0383166004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ca669fa790602401600060405180830381600087803b158015610b9f57600080fd5b505af1158015610bb3573d6000803e3d6000fd5b50505050610c53600860009054906101000a90046001600160a01b03166001600160a01b031663e8a3d4856040518163ffffffff1660e01b8152600401600060405180830381865afa158015610c0d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c359190810190611a4d565b60405180606001604052806021815260200161311c60219139611743565b5050565b6040517f06447d5600000000000000000000000000000000000000000000000000000000815260126004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d906306447d5690602401600060405180830381600087803b158015610cbd57600080fd5b505af1158015610cd1573d6000803e3d6000fd5b505050506000604051602001610d4d9060408082526010908201527f687474703a2f2f7572692e626173652f000000000000000000000000000000006060820152608060208201819052601d908201527f687474703a2f2f7572692e626173652f636f6e74726163742e6a736f6e00000060a082015260c00190565b60408051601f19818403018152908290526008547f856a7ffa0000000000000000000000000000000000000000000000000000000083529092506001600160a01b03169063856a7ffa90610da5908490600401611b26565b600060405180830381600087803b158015610dbf57600080fd5b505af1158015610dd3573d6000803e3d6000fd5b505060085460405163c87b56dd60e01b8152600c6004820152610e8893506001600160a01b03909116915063c87b56dd906024015b600060405180830381865afa158015610e25573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e4d9190810190611a4d565b6040518060400160405280601281526020017f687474703a2f2f7572692e626173652f31320000000000000000000000000000815250611743565b600854604080517fe8a3d4850000000000000000000000000000000000000000000000000000000081529051610eec926001600160a01b03169163e8a3d4859160048083019260009291908290030181865afa158015610795573d6000803e3d6000fd5b6008546040517faf806d560000000000000000000000000000000000000000000000000000000081526012600482015260606024820152601460648201527f687474703a2f2f7572692e626173652e6e65772f000000000000000000000000608482015260a06044820152602160a48201527f687474703a2f2f7572692e626173652e6e65772f636f6e74726163742e6a736f60c48201527f6e0000000000000000000000000000000000000000000000000000000000000060e48201526001600160a01b039091169063af806d569061010401600060405180830381600087803b158015610fda57600080fd5b505af1158015610fee573d6000803e3d6000fd5b505060085460405163c87b56dd60e01b8152600c60048201526110a293506001600160a01b03909116915063c87b56dd90602401600060405180830381865afa15801561103f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110679190810190611a4d565b6040518060400160405280601681526020017f687474703a2f2f7572692e626173652e6e65772f313200000000000000000000815250611743565b600854604080517fe8a3d485000000000000000000000000000000000000000000000000000000008152905161044d926001600160a01b03169163e8a3d4859160048083019260009291908290030181865afa158015610c0d573d6000803e3d6000fd5b60008054610100900460ff16156111265750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156112435760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c65640000000000000000000000000000000000000000000000000000828401528251808303840181526060830190935260009290916111cb917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611b40565b60408051601f19818403018152908290526111e591611b88565b6000604051808303816000865af19150503d8060008114611222576040519150601f19603f3d011682016040523d82523d6000602084013e611227565b606091505b509150508080602001905181019061123f9190611ba4565b9150505b919050565b6040517f06447d5600000000000000000000000000000000000000000000000000000000815260126004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d906306447d5690602401600060405180830381600087803b1580156112ae57600080fd5b505af11580156112c2573d6000803e3d6000fd5b50505050600060405160200161133e9060408082526010908201527f687474703a2f2f7572692e626173652f000000000000000000000000000000006060820152608060208201819052601d908201527f687474703a2f2f7572692e626173652f636f6e74726163742e6a736f6e00000060a082015260c00190565b60408051601f19818403018152908290526008547f856a7ffa0000000000000000000000000000000000000000000000000000000083529092506001600160a01b03169063856a7ffa90611396908490600401611b26565b600060405180830381600087803b1580156113b057600080fd5b505af11580156113c4573d6000803e3d6000fd5b505060085460405163c87b56dd60e01b8152600c60048201526113fd93506001600160a01b03909116915063c87b56dd90602401610e08565b600854604080517fe8a3d4850000000000000000000000000000000000000000000000000000000081529051611461926001600160a01b03169163e8a3d4859160048083019260009291908290030181865afa158015610795573d6000803e3d6000fd5b604080517f90c5013b0000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d916390c5013b91600480830192600092919082900301818387803b1580156114c657600080fd5b505af11580156114da573d6000803e3d6000fd5b50506040517fca669fa700000000000000000000000000000000000000000000000000000000815260146004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d925063ca669fa79150602401600060405180830381600087803b15801561154457600080fd5b505af1158015611558573d6000803e3d6000fd5b5050604080517ff48448140000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d935063f48448149250600480830192600092919082900301818387803b1580156115c157600080fd5b505af11580156115d5573d6000803e3d6000fd5b505060085460405163c87b56dd60e01b8152600c60048201526001600160a01b03909116925063c87b56dd9150602401600060405180830381865afa158015611622573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261164a9190810190611a4d565b50604080517ff48448140000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d9163f484481491600480830192600092919082900301818387803b1580156116b057600080fd5b505af11580156116c4573d6000803e3d6000fd5b50505050600860009054906101000a90046001600160a01b03166001600160a01b031663e8a3d4856040518163ffffffff1660e01b8152600401600060405180830381865afa15801561171b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c539190810190611a4d565b806040516020016117549190611b88565b604051602081830303815290604052805190602001208260405160200161177b9190611b88565b6040516020818303038152906040528051906020012014610c53577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f5060405161181b9060208082526024908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b73747260408201527f696e675d00000000000000000000000000000000000000000000000000000000606082015260800190565b60405180910390a17f280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf3583816040516118529190611bc6565b60405180910390a17f280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf3583826040516118899190611c0d565b60405180910390a1610c53737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156119a65760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c656400000000000000000000000000000000000000000000000000009282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f19818403018152908290526119459291602001611b40565b60408051601f198184030181529082905261195f91611b88565b6000604051808303816000865af19150503d806000811461199c576040519150601f19603f3d011682016040523d82523d6000602084013e6119a1565b606091505b505050505b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b6112fc80611c5583390190565b6101cb80612f5183390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60005b83811015611a38578181015183820152602001611a20565b83811115611a47576000848401525b50505050565b600060208284031215611a5f57600080fd5b815167ffffffffffffffff80821115611a7757600080fd5b818401915084601f830112611a8b57600080fd5b815181811115611a9d57611a9d6119ee565b604051601f8201601f19908116603f01168101908382118183101715611ac557611ac56119ee565b81604052828152876020848701011115611ade57600080fd5b611aef836020830160208801611a1d565b979650505050505050565b60008151808452611b12816020860160208601611a1d565b601f01601f19169290920160200192915050565b602081526000611b396020830184611afa565b9392505050565b7fffffffff000000000000000000000000000000000000000000000000000000008316815260008251611b7a816004850160208701611a1d565b919091016004019392505050565b60008251611b9a818460208701611a1d565b9190910192915050565b600060208284031215611bb657600080fd5b81518015158114611b3957600080fd5b60408152600a60408201527f20204578706563746564000000000000000000000000000000000000000000006060820152608060208201526000611b396080830184611afa565b60408152600a60408201527f2020202041637475616c000000000000000000000000000000000000000000006060820152608060208201526000611b396080830184611afa56fe608060405234801561001057600080fd5b506112dc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c87b56dd1161005b578063c87b56dd146100f4578063cc1306db14610114578063de5af49b14610127578063e8a3d4851461015557600080fd5b806342495a951461008d578063856a7ffa146100a257806391074f98146100b5578063af806d56146100e1575b600080fd5b6100a061009b366004610db5565b61015d565b005b6100a06100b0366004610e56565b61025b565b6100c86100c3366004610e9f565b610298565b6040516100d89493929190610f12565b60405180910390f35b6100a06100ef366004610f5d565b610458565b610107610102366004610fd1565b610564565b6040516100d89190610fea565b6100a0610122366004610ffd565b61078e565b610147610135366004610e9f565b60016020526000908152604090205481565b6040519081526020016100d8565b6101076108de565b8473ffffffffffffffffffffffffffffffffffffffff8116331480159061020f57506040517f24d7806c00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906324d7806c90602401602060405180830381865afa1580156101e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020d9190611027565b155b15610246576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102538686868686610994565b505050505050565b60008082806020019051810190610272919061108e565b91509150610293338360405180602001604052806000815250846000610994565b505050565b6000602081905290815260409020805481906102b3906110f2565b80601f01602080910402602001604051908101604052809291908181526020018280546102df906110f2565b801561032c5780601f106103015761010080835404028352916020019161032c565b820191906000526020600020905b81548152906001019060200180831161030f57829003601f168201915b505050505090806001018054610341906110f2565b80601f016020809104026020016040519081016040528092919081815260200182805461036d906110f2565b80156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d57829003601f168201915b5050505050908060020180546103cf906110f2565b80601f01602080910402602001604051908101604052809291908181526020018280546103fb906110f2565b80156104485780601f1061041d57610100808354040283529160200191610448565b820191906000526020600020905b81548152906001019060200180831161042b57829003601f168201915b5050505050908060030154905084565b8273ffffffffffffffffffffffffffffffffffffffff8116331480159061050a57506040517f24d7806c00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906324d7806c90602401602060405180830381865afa1580156104e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105089190611027565b155b15610541576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055e848460405180602001604052806000815250856000610994565b50505050565b33600090815260208190526040808220815160808101909252805460609392919082908290610592906110f2565b80601f01602080910402602001604051908101604052809291908181526020018280546105be906110f2565b801561060b5780601f106105e05761010080835404028352916020019161060b565b820191906000526020600020905b8154815290600101906020018083116105ee57829003601f168201915b50505050508152602001600182018054610624906110f2565b80601f0160208091040260200160405190810160405280929190818152602001828054610650906110f2565b801561069d5780601f106106725761010080835404028352916020019161069d565b820191906000526020600020905b81548152906001019060200180831161068057829003601f168201915b505050505081526020016002820180546106b6906110f2565b80601f01602080910402602001604051908101604052809291908181526020018280546106e2906110f2565b801561072f5780601f106107045761010080835404028352916020019161072f565b820191906000526020600020905b81548152906001019060200180831161071257829003601f168201915b5050505050815260200160038201548152505090508060000151516000141561075757600080fd5b805161076284610ad1565b60208084015160405161077794939201611146565b604051602081830303815290604052915050919050565b8173ffffffffffffffffffffffffffffffffffffffff8116331480159061084057506040517f24d7806c00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906324d7806c90602401602060405180830381865afa15801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e9190611027565b155b15610877576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602052604090819020849055517ff2e078c4022bfd6c56addd06540a4a5dd4252b6b2c424b6840c184063f48fc27906108d19085815260200190565b60405180910390a2505050565b33600090815260208190526040812060020180546060929190610900906110f2565b80601f016020809104026020016040519081016040528092919081815260200182805461092c906110f2565b80156109795780601f1061094e57610100808354040283529160200191610979565b820191906000526020600020905b81548152906001019060200180831161095c57829003601f168201915b5050505050905080516000141561098f57600080fd5b919050565b80158015906109a257504281115b156109d9576040517feef043fe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160808101825285815260208082018690528183018590526060820184905273ffffffffffffffffffffffffffffffffffffffff88166000908152808252929092208151805192939192610a339284920190610c0b565b506020828101518051610a4c9260018501920190610c0b565b5060408201518051610a68916002840191602090910190610c0b565b50606082015181600301559050508473ffffffffffffffffffffffffffffffffffffffff167f5eff125d5659803f33dbda215d6e8bfe0a404fd213a9ecb5e61973ee16cb17e785858585604051610ac29493929190610f12565b60405180910390a25050505050565b606081610b1157505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610b3b5780610b25816111b8565b9150610b349050600a83611220565b9150610b15565b60008167ffffffffffffffff811115610b5657610b56610cc8565b6040519080825280601f01601f191660200182016040528015610b80576020820181803683370190505b5090505b8415610c0357610b95600183611234565b9150610ba2600a8661124b565b610bad90603061125f565b60f81b818381518110610bc257610bc2611277565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610bfc600a86611220565b9450610b84565b949350505050565b828054610c17906110f2565b90600052602060002090601f016020900481019282610c395760008555610c7f565b82601f10610c5257805160ff1916838001178555610c7f565b82800160010185558215610c7f579182015b82811115610c7f578251825591602001919060010190610c64565b50610c8b929150610c8f565b5090565b5b80821115610c8b5760008155600101610c90565b803573ffffffffffffffffffffffffffffffffffffffff8116811461098f57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610d2057610d20610cc8565b604052919050565b600067ffffffffffffffff821115610d4257610d42610cc8565b50601f01601f191660200190565b6000610d63610d5e84610d28565b610cf7565b9050828152838383011115610d7757600080fd5b828260208301376000602084830101529392505050565b600082601f830112610d9f57600080fd5b610dae83833560208501610d50565b9392505050565b600080600080600060a08688031215610dcd57600080fd5b610dd686610ca4565b9450602086013567ffffffffffffffff80821115610df357600080fd5b610dff89838a01610d8e565b95506040880135915080821115610e1557600080fd5b610e2189838a01610d8e565b94506060880135915080821115610e3757600080fd5b50610e4488828901610d8e565b95989497509295608001359392505050565b600060208284031215610e6857600080fd5b813567ffffffffffffffff811115610e7f57600080fd5b8201601f81018413610e9057600080fd5b610c0384823560208401610d50565b600060208284031215610eb157600080fd5b610dae82610ca4565b60005b83811015610ed5578181015183820152602001610ebd565b8381111561055e5750506000910152565b60008151808452610efe816020860160208601610eba565b601f01601f19169290920160200192915050565b608081526000610f256080830187610ee6565b8281036020840152610f378187610ee6565b90508281036040840152610f4b8186610ee6565b91505082606083015295945050505050565b600080600060608486031215610f7257600080fd5b610f7b84610ca4565b9250602084013567ffffffffffffffff80821115610f9857600080fd5b610fa487838801610d8e565b93506040860135915080821115610fba57600080fd5b50610fc786828701610d8e565b9150509250925092565b600060208284031215610fe357600080fd5b5035919050565b602081526000610dae6020830184610ee6565b6000806040838503121561101057600080fd5b61101983610ca4565b946020939093013593505050565b60006020828403121561103957600080fd5b81518015158114610dae57600080fd5b600082601f83011261105a57600080fd5b8151611068610d5e82610d28565b81815284602083860101111561107d57600080fd5b610c03826020830160208701610eba565b600080604083850312156110a157600080fd5b825167ffffffffffffffff808211156110b957600080fd5b6110c586838701611049565b935060208501519150808211156110db57600080fd5b506110e885828601611049565b9150509250929050565b600181811c9082168061110657607f821691505b60208210811415611140577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008451611158818460208901610eba565b84519083019061116c818360208901610eba565b845191019061117f818360208801610eba565b0195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111ea576111ea611189565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008261122f5761122f6111f1565b500490565b60008282101561124657611246611189565b500390565b60008261125a5761125a6111f1565b500690565b6000821982111561127257611272611189565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220c87748e685039ddab971b7cb97d7a448675068d69c57fec1ec50cf0468280ad564736f6c634300080a0033608060405234801561001057600080fd5b506101ab806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806324d7806c1461003b578063c4d259ad14610088575b600080fd5b610074610049366004610117565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205460ff1690565b604051901515815260200160405180910390f35b6100ec610096366004610139565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260208190526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b005b803573ffffffffffffffffffffffffffffffffffffffff8116811461011257600080fd5b919050565b60006020828403121561012957600080fd5b610132826100ee565b9392505050565b6000806040838503121561014c57600080fd5b610155836100ee565b91506020830135801515811461016a57600080fd5b80915050925092905056fea26469706673582212209743b789f51bd6f4b120ee99fc2b733d8e9185fd5535223868864bfe07f0604764736f6c634300080a0033687474703a2f2f7572692e626173652e6e65772f636f6e74726163742e6a736f6ea2646970667358221220975940fa7720d6b4e7d07c978fa672f05c447b2de354572a545883940a0b397864736f6c634300080a0033";

type DropMetadataRendererTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DropMetadataRendererTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DropMetadataRendererTest__factory extends ContractFactory {
  constructor(...args: DropMetadataRendererTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DropMetadataRendererTest> {
    return super.deploy(overrides || {}) as Promise<DropMetadataRendererTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DropMetadataRendererTest {
    return super.attach(address) as DropMetadataRendererTest;
  }
  override connect(signer: Signer): DropMetadataRendererTest__factory {
    return super.connect(signer) as DropMetadataRendererTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DropMetadataRendererTestInterface {
    return new utils.Interface(_abi) as DropMetadataRendererTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DropMetadataRendererTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DropMetadataRendererTest;
  }
}