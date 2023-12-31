/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface IFactoryUpgradeGateInterface extends utils.Interface {
  functions: {
    "isValidUpgradePath(address,address)": FunctionFragment;
    "registerNewUpgradePath(address,address[])": FunctionFragment;
    "unregisterUpgradePath(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isValidUpgradePath"
      | "registerNewUpgradePath"
      | "unregisterUpgradePath"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isValidUpgradePath",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerNewUpgradePath",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterUpgradePath",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidUpgradePath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerNewUpgradePath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterUpgradePath",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IFactoryUpgradeGate extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFactoryUpgradeGateInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isValidUpgradePath(
      _newImpl: string,
      _currentImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerNewUpgradePath(
      _newImpl: string,
      _supportedPrevImpls: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregisterUpgradePath(
      _newImpl: string,
      _prevImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  isValidUpgradePath(
    _newImpl: string,
    _currentImpl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerNewUpgradePath(
    _newImpl: string,
    _supportedPrevImpls: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregisterUpgradePath(
    _newImpl: string,
    _prevImpl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    isValidUpgradePath(
      _newImpl: string,
      _currentImpl: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerNewUpgradePath(
      _newImpl: string,
      _supportedPrevImpls: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    unregisterUpgradePath(
      _newImpl: string,
      _prevImpl: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    isValidUpgradePath(
      _newImpl: string,
      _currentImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerNewUpgradePath(
      _newImpl: string,
      _supportedPrevImpls: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unregisterUpgradePath(
      _newImpl: string,
      _prevImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isValidUpgradePath(
      _newImpl: string,
      _currentImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerNewUpgradePath(
      _newImpl: string,
      _supportedPrevImpls: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregisterUpgradePath(
      _newImpl: string,
      _prevImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
