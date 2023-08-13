/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DummyMetadataRenderer,
  DummyMetadataRendererInterface,
} from "../DummyMetadataRenderer";

const _abi = [
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializeWithData",
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
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102ae806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063856a7ffa14610046578063c87b56dd14610059578063e8a3d485146100b5575b600080fd5b61005761005436600461011d565b50565b005b61009f6100673660046101ec565b5060408051808201909152600581527f44554d4d59000000000000000000000000000000000000000000000000000000602082015290565b6040516100ac9190610205565b60405180910390f35b60408051808201909152600581527f44554d4d59000000000000000000000000000000000000000000000000000000602082015261009f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561012f57600080fd5b813567ffffffffffffffff8082111561014757600080fd5b818401915084601f83011261015b57600080fd5b81358181111561016d5761016d6100ee565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101b3576101b36100ee565b816040528281528760208487010111156101cc57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000602082840312156101fe57600080fd5b5035919050565b600060208083528351808285015260005b8181101561023257858101830151858201604001528201610216565b81811115610244576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea2646970667358221220691ad1f0f0f4008508c3f07f1ed5f47e4fd2aa6dc760277b2e7fa6b6cc4aa72664736f6c634300080a0033";

type DummyMetadataRendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyMetadataRendererConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyMetadataRenderer__factory extends ContractFactory {
  constructor(...args: DummyMetadataRendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DummyMetadataRenderer> {
    return super.deploy(overrides || {}) as Promise<DummyMetadataRenderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DummyMetadataRenderer {
    return super.attach(address) as DummyMetadataRenderer;
  }
  override connect(signer: Signer): DummyMetadataRenderer__factory {
    return super.connect(signer) as DummyMetadataRenderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyMetadataRendererInterface {
    return new utils.Interface(_abi) as DummyMetadataRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyMetadataRenderer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DummyMetadataRenderer;
  }
}