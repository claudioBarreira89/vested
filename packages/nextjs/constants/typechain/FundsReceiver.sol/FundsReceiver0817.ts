/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface FundsReceiver0817Interface extends utils.Interface {
  functions: {};

  events: {
    "FundsReceived(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundsReceived"): EventFragment;
}

export interface FundsReceivedEventObject {
  source: string;
  amount: BigNumber;
}
export type FundsReceivedEvent = TypedEvent<
  [string, BigNumber],
  FundsReceivedEventObject
>;

export type FundsReceivedEventFilter = TypedEventFilter<FundsReceivedEvent>;

export interface FundsReceiver0817 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FundsReceiver0817Interface;

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

  functions: {};

  callStatic: {};

  filters: {
    "FundsReceived(address,uint256)"(
      source?: string | null,
      amount?: null
    ): FundsReceivedEventFilter;
    FundsReceived(
      source?: string | null,
      amount?: null
    ): FundsReceivedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
