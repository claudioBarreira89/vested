/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IZoraFeeManager0817,
  IZoraFeeManager0817Interface,
} from "../../IZoraFeeManager.sol/IZoraFeeManager0817";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "getZORAWithdrawFeesBPS",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IZoraFeeManager0817__factory {
  static readonly abi = _abi;
  static createInterface(): IZoraFeeManager0817Interface {
    return new utils.Interface(_abi) as IZoraFeeManager0817Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IZoraFeeManager0817 {
    return new Contract(address, _abi, signerOrProvider) as IZoraFeeManager0817;
  }
}
