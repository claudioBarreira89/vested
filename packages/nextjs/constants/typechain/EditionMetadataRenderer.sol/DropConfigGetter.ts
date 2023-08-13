/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export declare namespace IERC721Drop {
  export type ConfigurationStruct = {
    metadataRenderer: string;
    editionSize: BigNumberish;
    royaltyBPS: BigNumberish;
    fundsRecipient: string;
  };

  export type ConfigurationStructOutput = [
    string,
    BigNumber,
    number,
    string
  ] & {
    metadataRenderer: string;
    editionSize: BigNumber;
    royaltyBPS: number;
    fundsRecipient: string;
  };
}

export interface DropConfigGetterInterface extends utils.Interface {
  functions: {
    "config()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "config"): FunctionFragment;

  encodeFunctionData(functionFragment: "config", values?: undefined): string;

  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;

  events: {};
}

export interface DropConfigGetter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DropConfigGetterInterface;

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
    config(
      overrides?: CallOverrides
    ): Promise<
      [IERC721Drop.ConfigurationStructOutput] & {
        config: IERC721Drop.ConfigurationStructOutput;
      }
    >;
  };

  config(
    overrides?: CallOverrides
  ): Promise<IERC721Drop.ConfigurationStructOutput>;

  callStatic: {
    config(
      overrides?: CallOverrides
    ): Promise<IERC721Drop.ConfigurationStructOutput>;
  };

  filters: {};

  estimateGas: {
    config(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}