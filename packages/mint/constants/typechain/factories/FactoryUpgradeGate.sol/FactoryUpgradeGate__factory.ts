/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FactoryUpgradeGate,
  FactoryUpgradeGateInterface,
} from "../../FactoryUpgradeGate.sol/FactoryUpgradeGate";

const _abi = [
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
    inputs: [],
    name: "Access_OnlyOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_PENDING_OWNER",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "potentialNewOwner",
        type: "address",
      },
    ],
    name: "OwnerCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "potentialNewOwner",
        type: "address",
      },
    ],
    name: "OwnerPending",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldImpl",
        type: "address",
      },
    ],
    name: "UpgradePathRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldImpl",
        type: "address",
      },
    ],
    name: "UpgradePathRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_currentImpl",
        type: "address",
      },
    ],
    name: "isValidUpgradePath",
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
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_supportedPrevImpls",
        type: "address[]",
      },
    ],
    name: "registerNewUpgradePath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_prevImpl",
        type: "address",
      },
    ],
    name: "unregisterUpgradePath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161061738038061061783398101604081905261002f91610099565b6100388161003e565b506100c9565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b61053f806100d86000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806373995833146100515780638466a71c146100af57806389428654146100c45780638da5cb5b146100d7575b600080fd5b61009a61005f36600461039f565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b60405190151581526020015b60405180910390f35b6100c26100bd36600461039f565b6100ff565b005b6100c26100d23660046103d2565b6101e6565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a6565b60005473ffffffffffffffffffffffffffffffffffffffff163314610150576040517f5570104000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82811660008181526001602090815260408083209486168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905581519283528201929092527fa3a0491075ec5f5949945a6f452fb9e0619a4dacc65a568ad2da3210cc91cdab910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610237576040517f5570104000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156103705773ffffffffffffffffffffffffffffffffffffffff841660009081526001602081905260408220909185858581811061027d5761027d610458565b90506020020160208101906102929190610487565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790557f7acfb66a4ce41040d432f980d35151e6d37f3279e6f8dbf383b0f5112271462f8484848481811061031957610319610458565b905060200201602081019061032e9190610487565b6040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301520160405180910390a180610368816104a9565b91505061023a565b50505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461039a57600080fd5b919050565b600080604083850312156103b257600080fd5b6103bb83610376565b91506103c960208401610376565b90509250929050565b6000806000604084860312156103e757600080fd5b6103f084610376565b9250602084013567ffffffffffffffff8082111561040d57600080fd5b818601915086601f83011261042157600080fd5b81358181111561043057600080fd5b8760208260051b850101111561044557600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561049957600080fd5b6104a282610376565b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610502577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220ede66c59121e621ee765f712026410e88d00c12774ff2c82fc757f64f5481e8064736f6c634300080a0033";

type FactoryUpgradeGateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryUpgradeGateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FactoryUpgradeGate__factory extends ContractFactory {
  constructor(...args: FactoryUpgradeGateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FactoryUpgradeGate> {
    return super.deploy(_owner, overrides || {}) as Promise<FactoryUpgradeGate>;
  }
  override getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): FactoryUpgradeGate {
    return super.attach(address) as FactoryUpgradeGate;
  }
  override connect(signer: Signer): FactoryUpgradeGate__factory {
    return super.connect(signer) as FactoryUpgradeGate__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryUpgradeGateInterface {
    return new utils.Interface(_abi) as FactoryUpgradeGateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryUpgradeGate {
    return new Contract(address, _abi, signerOrProvider) as FactoryUpgradeGate;
  }
}
