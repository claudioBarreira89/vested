/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBeaconUpgradeable0817,
  IBeaconUpgradeable0817Interface,
} from "../../IBeaconUpgradeable.sol/IBeaconUpgradeable0817";

const _abi = [
  {
    inputs: [],
    name: "implementation",
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
];

export class IBeaconUpgradeable0817__factory {
  static readonly abi = _abi;
  static createInterface(): IBeaconUpgradeable0817Interface {
    return new utils.Interface(_abi) as IBeaconUpgradeable0817Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBeaconUpgradeable0817 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBeaconUpgradeable0817;
  }
}
