import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { TestERC20Token, TokenVesting } from "../typechain-types";
import { ethers } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("YourContract", {
    from: deployer,
    // Contract constructor arguments
    args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  await deploy("Congress", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  await deploy("TestERC20Token", {
    from: deployer,
    args: ["TT", "TT", 1000000],
    log: true,
    autoMine: true,
  });

  const testTokenContract: TestERC20Token = await hre.ethers.getContract("TestERC20Token", deployer);

  await deploy("TokenVesting", {
    from: deployer,
    args: [testTokenContract.address],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  await testTokenContract
    .balanceOf(deployer)
    .then(value => {
      console.log("Tokens on deployer address:", ethers.utils.formatUnits(value._hex, 18));
    })
    .catch(error => {
      console.log(error);
    });

  // Get the deployed contract
  const vestingTokenContract: TokenVesting = await hre.ethers.getContract("TokenVesting", deployer);

  await testTokenContract
    .balanceOf(vestingTokenContract.address)
    .then(value => {
      console.log("Balance on vesting token contract:", ethers.utils.formatUnits(value._hex, 18));
    })
    .catch(error => {
      console.log(error);
    });

  const amount = ethers.utils.parseUnits("100", 18);

  const tx = await testTokenContract.transfer(vestingTokenContract.address, amount);
  console.log(`Transaction hash: ${tx.hash}`);
  console.log(`Tokens sent: ${ethers.utils.formatUnits(amount, 18)} TestERC20 tokens`);

  await testTokenContract
    .balanceOf(vestingTokenContract.address)
    .then(value => {
      console.log("Balance on vesting token contract:", ethers.utils.formatUnits(value._hex, 18));
    })
    .catch(error => {
      console.log(error);
    });

  const _recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const _startTimestamp = "1691668093"; // today
  const _endTimestamp = "1691754493"; // day after today
  const _cliffReleaseTimestamp = _startTimestamp;
  const _releaseIntervalSecs = 60; // every 60 seconds, linearVestAmount will be release
  const _linearVestAmount = 1; // amount to be released every _releaseIntervalSecs, in this every 60 secs
  const _cliffAmount = 24;

  console.log(
    "Tokens to have on vesting contract address before creating the claim:",
    _cliffAmount + _linearVestAmount,
  );

  console.log("Creating the claim...");

  await vestingTokenContract
    .createClaim(
      _recipient,
      _startTimestamp,
      _endTimestamp,
      _cliffReleaseTimestamp,
      _releaseIntervalSecs,
      _linearVestAmount,
      _cliffAmount,
      {
        gasLimit: 200000,
        // nonce: nonce || undefined,
      },
    )
    .then(res => {
      console.log("Claim created:", res.hash);
    })
    .catch(error => {
      console.error("Transaction error:", error);
    });

  const getUserClaim = await vestingTokenContract.getClaim(deployer);

  console.log("User claim: ", getUserClaim);

  const userEndTimestampBefore = await vestingTokenContract.getUserEndTimestamp(deployer);

  console.log("User end timestamp: ", userEndTimestampBefore);

  await vestingTokenContract
    .reduceVesteeCliffTime(deployer)
    .then(res => {
      console.log("User end timestamp reduced transaction: ", res.hash);
    })
    .catch(error => {
      console.error("Transaction error:", error);
    });

  const userEndTimestampAfterReduction = await vestingTokenContract.getUserEndTimestamp(deployer);

  console.log("User end timestamp after the reduction: ", userEndTimestampAfterReduction);

  console.log("User end timestamp difference: ", userEndTimestampBefore - userEndTimestampAfterReduction);
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["Congress", "TokenVesting", "TestERC20Token"];
