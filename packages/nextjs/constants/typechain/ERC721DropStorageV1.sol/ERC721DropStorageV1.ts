/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface ERC721DropStorageV1Interface extends utils.Interface {
  functions: {
    "config()": FunctionFragment;
    "presaleMintsByAddress(address)": FunctionFragment;
    "salesConfig()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "config" | "presaleMintsByAddress" | "salesConfig"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "presaleMintsByAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "salesConfig",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "presaleMintsByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "salesConfig",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC721DropStorageV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721DropStorageV1Interface;

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
      [string, BigNumber, number, string] & {
        metadataRenderer: string;
        editionSize: BigNumber;
        royaltyBPS: number;
        fundsRecipient: string;
      }
    >;

    presaleMintsByAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    salesConfig(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ] & {
        publicSalePrice: BigNumber;
        maxSalePurchasePerAddress: number;
        publicSaleStart: BigNumber;
        publicSaleEnd: BigNumber;
        presaleStart: BigNumber;
        presaleEnd: BigNumber;
        presaleMerkleRoot: string;
      }
    >;
  };

  config(
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, number, string] & {
      metadataRenderer: string;
      editionSize: BigNumber;
      royaltyBPS: number;
      fundsRecipient: string;
    }
  >;

  presaleMintsByAddress(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  salesConfig(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber, BigNumber, BigNumber, BigNumber, string] & {
      publicSalePrice: BigNumber;
      maxSalePurchasePerAddress: number;
      publicSaleStart: BigNumber;
      publicSaleEnd: BigNumber;
      presaleStart: BigNumber;
      presaleEnd: BigNumber;
      presaleMerkleRoot: string;
    }
  >;

  callStatic: {
    config(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, number, string] & {
        metadataRenderer: string;
        editionSize: BigNumber;
        royaltyBPS: number;
        fundsRecipient: string;
      }
    >;

    presaleMintsByAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    salesConfig(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ] & {
        publicSalePrice: BigNumber;
        maxSalePurchasePerAddress: number;
        publicSaleStart: BigNumber;
        publicSaleEnd: BigNumber;
        presaleStart: BigNumber;
        presaleEnd: BigNumber;
        presaleMerkleRoot: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    config(overrides?: CallOverrides): Promise<BigNumber>;

    presaleMintsByAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    salesConfig(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    presaleMintsByAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    salesConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
