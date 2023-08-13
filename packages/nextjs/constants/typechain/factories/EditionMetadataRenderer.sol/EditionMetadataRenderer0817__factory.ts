/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EditionMetadataRenderer0817,
  EditionMetadataRenderer0817Interface,
} from "../../EditionMetadataRenderer.sol/EditionMetadataRenderer0817";

const _abi = [
  {
    inputs: [],
    name: "Access_OnlyAdmin",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newDescription",
        type: "string",
      },
    ],
    name: "DescriptionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "animationURI",
        type: "string",
      },
    ],
    name: "EditionInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "animationURI",
        type: "string",
      },
    ],
    name: "MediaURIsUpdated",
    type: "event",
  },
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
    stateMutability: "view",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenInfos",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "animationURI",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "newDescription",
        type: "string",
      },
    ],
    name: "updateDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "animationURI",
        type: "string",
      },
    ],
    name: "updateMediaURIs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612248806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063ba46ae7211610050578063ba46ae72146100b2578063c87b56dd146100dd578063e8a3d485146100fd57600080fd5b80632f17b8f014610077578063856a7ffa1461008c5780638bbb2cf21461009f575b600080fd5b61008a6100853660046114c2565b610105565b005b61008a61009a366004611538565b6102ac565b61008a6100ad366004611581565b610369565b6100c56100c03660046115d1565b6104d7565b6040516100d49392919061163e565b60405180910390f35b6100f06100eb366004611677565b610691565b6040516100d49190611690565b6100f06109a5565b8273ffffffffffffffffffffffffffffffffffffffff811633148015906101b757506040517f24d7806c00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906324d7806c90602401602060405180830381865afa158015610191573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b591906116b8565b155b156101ee576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090206001016102208482611775565b5073ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090206002016102538382611775565b508373ffffffffffffffffffffffffffffffffffffffff167fc4c1b9223fcebe5f35b9030d3df655018c40e88d70b8a3c63ed851c5d972210f33858560405161029e93929190611835565b60405180910390a250505050565b6000806000838060200190518101906102c591906118bb565b604080516060810182528481526020808201859052818301849052336000908152908190529190912081519497509295509093509181906103069082611775565b506020820151600182019061031b9082611775565b50604082015160028201906103309082611775565b50506040513391507ff889a5cdc62274389379cbfade0f225b1d30b7395177fd6aeaab61662b1c6edf9061029e9086908690869061163e565b8173ffffffffffffffffffffffffffffffffffffffff8116331480159061041b57506040517f24d7806c00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906324d7806c90602401602060405180830381865afa1580156103f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041991906116b8565b155b15610452576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090206104818382611775565b508273ffffffffffffffffffffffffffffffffffffffff167f36195b44a3184513e02477929207751ea9d67026b917ed74d374a7f9e8c5e4d133846040516104ca929190611939565b60405180910390a2505050565b6000602081905290815260409020805481906104f2906116d3565b80601f016020809104026020016040519081016040528092919081815260200182805461051e906116d3565b801561056b5780601f106105405761010080835404028352916020019161056b565b820191906000526020600020905b81548152906001019060200180831161054e57829003601f168201915b505050505090806001018054610580906116d3565b80601f01602080910402602001604051908101604052809291908181526020018280546105ac906116d3565b80156105f95780601f106105ce576101008083540402835291602001916105f9565b820191906000526020600020905b8154815290600101906020018083116105dc57829003601f168201915b50505050509080600201805461060e906116d3565b80601f016020809104026020016040519081016040528092919081815260200182805461063a906116d3565b80156106875780601f1061065c57610100808354040283529160200191610687565b820191906000526020600020905b81548152906001019060200180831161066a57829003601f168201915b5050505050905083565b3360008181526020819052604080822081516060818101909352815492949392909190829082906106c1906116d3565b80601f01602080910402602001604051908101604052809291908181526020018280546106ed906116d3565b801561073a5780601f1061070f5761010080835404028352916020019161073a565b820191906000526020600020905b81548152906001019060200180831161071d57829003601f168201915b50505050508152602001600182018054610753906116d3565b80601f016020809104026020016040519081016040528092919081815260200182805461077f906116d3565b80156107cc5780601f106107a1576101008083540402835291602001916107cc565b820191906000526020600020905b8154815290600101906020018083116107af57829003601f168201915b505050505081526020016002820180546107e5906116d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610811906116d3565b801561085e5780601f106108335761010080835404028352916020019161085e565b820191906000526020600020905b81548152906001019060200180831161084157829003601f168201915b5050505050815250509050600082905060008173ffffffffffffffffffffffffffffffffffffffff16633474a4a66040518163ffffffff1660e01b815260040161016060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e09190611980565b610140015190507fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000018101610912575060005b61099b8473ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015610960573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109889190810190611a39565b8451602086015160408701518a86610c6b565b9695505050505050565b3360008181526020819052604080822081517f79502c55000000000000000000000000000000000000000000000000000000008152915160609493919284916379502c55916004808201926080929091908290030181865afa158015610a0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a339190611a6e565b9050610c638373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a83573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610aab9190810190611a39565b83548490610ab8906116d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae4906116d3565b8015610b315780601f10610b0657610100808354040283529160200191610b31565b820191906000526020600020905b815481529060010190602001808311610b1457829003601f168201915b5050505050846001018054610b45906116d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610b71906116d3565b8015610bbe5780601f10610b9357610100808354040283529160200191610bbe565b820191906000526020600020905b815481529060010190602001808311610ba157829003601f168201915b5050505050856002018054610bd2906116d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfe906116d3565b8015610c4b5780601f10610c2057610100808354040283529160200191610c4b565b820191906000526020600020905b815481529060010190602001808311610c2e57829003601f168201915b5050505050856040015161ffff168660600151610ca2565b935050505090565b60606000610c798686610d72565b90506000610c8a8989848888610e02565b9050610c9581610e7e565b9998505050505050505050565b60408051602081019091526000815284516060919015610cdf5785604051602001610ccd9190611b14565b60405160208183030381529060405290505b604080516020810190915260008152855115610d185785604051602001610d069190611b59565b60405160208183030381529060405290505b610c958989610d2688610eaf565b610d478873ffffffffffffffffffffffffffffffffffffffff166014610fec565b8686604051602001610d5e96959493929190611b9e565b604051602081830303815290604052610e7e565b81518151606091158015911515908290610d895750805b15610db9578484604051602001610da1929190611cf8565b60405160208183030381529060405292505050610dfc565b8115610dd05784604051602001610da19190611da3565b8015610de75783604051602001610da19190611e0f565b60405180602001604052806000815250925050505b92915050565b6060808215610e3657610e1483610eaf565b604051602001610e249190611e7b565b60405160208183030381529060405290505b86610e4085610eaf565b828888610e4c89610eaf565b8c604051602001610e639796959493929190611ec0565b60405160208183030381529060405291505095945050505050565b6060610e898261123a565b604051602001610e99919061206a565b6040516020818303038152906040529050919050565b606081600003610ef257505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610f1c5780610f06816120de565b9150610f159050600a83612127565b9150610ef6565b60008167ffffffffffffffff811115610f3757610f376113b2565b6040519080825280601f01601f191660200182016040528015610f61576020820181803683370190505b5090505b8415610fe457610f7660018361213b565b9150610f83600a8661214e565b610f8e906030612162565b60f81b818381518110610fa357610fa3612175565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610fdd600a86612127565b9450610f65565b949350505050565b60606000610ffb8360026121a4565b611006906002612162565b67ffffffffffffffff81111561101e5761101e6113b2565b6040519080825280601f01601f191660200182016040528015611048576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061107f5761107f612175565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106110e2576110e2612175565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600061111e8460026121a4565b611129906001612162565b90505b60018111156111c6577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061116a5761116a612175565b1a60f81b82828151811061118057611180612175565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936111bf816121bb565b905061112c565b508315611233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640160405180910390fd5b9392505050565b6060815160000361125957505060408051602081019091526000815290565b60006040518060600160405280604081526020016121d360409139905060006003845160026112889190612162565b6112929190612127565b61129d9060046121a4565b67ffffffffffffffff8111156112b5576112b56113b2565b6040519080825280601f01601f1916602001820160405280156112df576020820181803683370190505b509050600182016020820185865187015b8082101561134b576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453506001830192506112f0565b5050600386510660018114611367576002811461137a57611382565b603d6001830353603d6002830353611382565b603d60018303535b509195945050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146113af57600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610160810167ffffffffffffffff81118282101715611405576114056113b2565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611434576114346113b2565b604052919050565b600067ffffffffffffffff821115611456576114566113b2565b50601f01601f191660200190565b60006114776114728461143c565b61140b565b905082815283838301111561148b57600080fd5b828260208301376000602084830101529392505050565b600082601f8301126114b357600080fd5b61123383833560208501611464565b6000806000606084860312156114d757600080fd5b83356114e28161138d565b9250602084013567ffffffffffffffff808211156114ff57600080fd5b61150b878388016114a2565b9350604086013591508082111561152157600080fd5b5061152e868287016114a2565b9150509250925092565b60006020828403121561154a57600080fd5b813567ffffffffffffffff81111561156157600080fd5b8201601f8101841361157257600080fd5b610fe484823560208401611464565b6000806040838503121561159457600080fd5b823561159f8161138d565b9150602083013567ffffffffffffffff8111156115bb57600080fd5b6115c7858286016114a2565b9150509250929050565b6000602082840312156115e357600080fd5b81356112338161138d565b60005b838110156116095781810151838201526020016115f1565b50506000910152565b6000815180845261162a8160208601602086016115ee565b601f01601f19169290920160200192915050565b6060815260006116516060830186611612565b82810360208401526116638186611612565b9050828103604084015261099b8185611612565b60006020828403121561168957600080fd5b5035919050565b6020815260006112336020830184611612565b805180151581146116b357600080fd5b919050565b6000602082840312156116ca57600080fd5b611233826116a3565b600181811c908216806116e757607f821691505b602082108103611720577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561177057600081815260208120601f850160051c8101602086101561174d5750805b601f850160051c820191505b8181101561176c57828155600101611759565b5050505b505050565b815167ffffffffffffffff81111561178f5761178f6113b2565b6117a38161179d84546116d3565b84611726565b602080601f8311600181146117d857600084156117c05750858301515b600019600386901b1c1916600185901b17855561176c565b600085815260208120601f198616915b82811015611807578886015182559484019460019091019084016117e8565b50858210156118255787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b73ffffffffffffffffffffffffffffffffffffffff841681526060602082015260006118646060830185611612565b828103604084015261099b8185611612565b600082601f83011261188757600080fd5b81516118956114728261143c565b8181528460208386010111156118aa57600080fd5b610fe48260208301602087016115ee565b6000806000606084860312156118d057600080fd5b835167ffffffffffffffff808211156118e857600080fd5b6118f487838801611876565b9450602086015191508082111561190a57600080fd5b61191687838801611876565b9350604086015191508082111561192c57600080fd5b5061152e86828701611876565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000610fe46040830184611612565b805167ffffffffffffffff811681146116b357600080fd5b6000610160828403121561199357600080fd5b61199b6113e1565b6119a4836116a3565b81526119b2602084016116a3565b6020820152604083015160408201526119cd60608401611968565b60608201526119de60808401611968565b60808201526119ef60a08401611968565b60a0820152611a0060c08401611968565b60c082015260e0838101519082015261010080840151908201526101208084015190820152610140928301519281019290925250919050565b600060208284031215611a4b57600080fd5b815167ffffffffffffffff811115611a6257600080fd5b610fe484828501611876565b600060808284031215611a8057600080fd5b6040516080810181811067ffffffffffffffff82111715611aa357611aa36113b2565b6040528251611ab18161138d565b8152611abf60208401611968565b6020820152604083015161ffff81168114611ad957600080fd5b60408201526060830151611aec8161138d565b60608201529392505050565b60008151611b0a8185602086016115ee565b9290920192915050565b7f222c2022696d616765223a202200000000000000000000000000000000000000815260008251611b4c81600d8501602087016115ee565b91909101600d0192915050565b7f222c2022616e696d6174696f6e5f75726c223a20220000000000000000000000815260008251611b918160158501602087016115ee565b9190910160150192915050565b7f7b226e616d65223a2022000000000000000000000000000000000000000000008152600087516020611bd782600a8601838d016115ee565b7f222c20226465736372697074696f6e223a202200000000000000000000000000600a928501928301528851611c1381601d8501848d016115ee565b7f222c202273656c6c65725f6665655f62617369735f706f696e7473223a200000601d93909101928301528751611c5081603b8501848c016115ee565b7f2c20226665655f726563697069656e74223a2022000000000000000000000000603b93909101928301528651611c8d81604f8501848b016115ee565b8651920191611ca281604f8501848a016115ee565b8551920191611cb781604f85018489016115ee565b611ce9604f828501017f227d000000000000000000000000000000000000000000000000000000000000815260020190565b9b9a5050505050505050505050565b7f696d616765223a20220000000000000000000000000000000000000000000000815260008351611d308160098501602088016115ee565b7f222c2022616e696d6174696f6e5f75726c223a202200000000000000000000006009918401918201528351611d6d81601e8401602088016115ee565b7f222c202200000000000000000000000000000000000000000000000000000000601e9290910191820152602201949350505050565b7f696d616765223a20220000000000000000000000000000000000000000000000815260008251611ddb8160098501602087016115ee565b7f222c2022000000000000000000000000000000000000000000000000000000006009939091019283015250600d01919050565b7f616e696d6174696f6e5f75726c223a2022000000000000000000000000000000815260008251611e478160118501602087016115ee565b7f222c2022000000000000000000000000000000000000000000000000000000006011939091019283015250601501919050565b7f2f00000000000000000000000000000000000000000000000000000000000000815260008251611eb38160018501602087016115ee565b9190910160010192915050565b7f7b226e616d65223a202200000000000000000000000000000000000000000000815260008851611ef881600a850160208d016115ee565b7f2000000000000000000000000000000000000000000000000000000000000000600a918401918201528851611f3581600b840160208d016115ee565b8851910190611f4b81600b840160208c016115ee565b8082019150507f222c20220000000000000000000000000000000000000000000000000000000080600b8301527f6465736372697074696f6e223a20220000000000000000000000000000000000600f8301528751611fb181601e850160208c016115ee565b601e92019182015261205c61203361202d612004611ffe611fd5602287018c611af8565b7f70726f70657274696573223a207b226e756d626572223a200000000000000000815260180190565b89611af8565b7f2c20226e616d65223a20220000000000000000000000000000000000000000008152600b0190565b86611af8565b7f227d7d0000000000000000000000000000000000000000000000000000000000815260030190565b9a9950505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000008152600082516120a281601d8501602087016115ee565b91909101601d0192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060001982036120f1576120f16120af565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612136576121366120f8565b500490565b81810381811115610dfc57610dfc6120af565b60008261215d5761215d6120f8565b500690565b80820180821115610dfc57610dfc6120af565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8082028115828204841417610dfc57610dfc6120af565b6000816121ca576121ca6120af565b50600019019056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220536843a798cfd6ffc4d763d11dfae6eff14c906e1ffe9cef8aca68fb7ca7d3f064736f6c63430008110033";

type EditionMetadataRenderer0817ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EditionMetadataRenderer0817ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EditionMetadataRenderer0817__factory extends ContractFactory {
  constructor(...args: EditionMetadataRenderer0817ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EditionMetadataRenderer0817> {
    return super.deploy(
      overrides || {}
    ) as Promise<EditionMetadataRenderer0817>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EditionMetadataRenderer0817 {
    return super.attach(address) as EditionMetadataRenderer0817;
  }
  override connect(signer: Signer): EditionMetadataRenderer0817__factory {
    return super.connect(signer) as EditionMetadataRenderer0817__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EditionMetadataRenderer0817Interface {
    return new utils.Interface(_abi) as EditionMetadataRenderer0817Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EditionMetadataRenderer0817 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EditionMetadataRenderer0817;
  }
}
