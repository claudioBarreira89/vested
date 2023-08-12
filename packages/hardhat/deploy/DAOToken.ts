import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { DAOToken, TokenVesting } from "../typechain-types";
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

  await deploy("Congress", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  await deploy("DAOToken", {
    from: deployer,
    args: ["DAOT", "DAOT", 100000000],
    log: true,
    autoMine: true,
  });

  const DAOTokenContract: DAOToken = await hre.ethers.getContract("DAOToken", deployer);

  await deploy("TokenVesting", {
    from: deployer,
    args: [DAOTokenContract.address],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  console.log("deployed the contract");

  await DAOTokenContract.balanceOf(deployer)
    .then(value => {
      console.log("Tokens on deployer address:", ethers.utils.formatUnits(value._hex, 18));
    })
    .catch(error => {
      console.log(error);
    });

  // Get the deployed contract
  const vestingTokenContract: TokenVesting = await hre.ethers.getContract("TokenVesting", deployer);

  await DAOTokenContract.balanceOf(vestingTokenContract.address)
    .then(value => {
      console.log("Balance on vesting token contract:", ethers.utils.formatUnits(value._hex, 18));
    })
    .catch(error => {
      console.log(error);
    });

  const amount = ethers.utils.parseUnits("100", 18);

  const tx = await DAOTokenContract.transfer(vestingTokenContract.address, amount);
  console.log(`Transaction hash: ${tx.hash}`);
  console.log(`Tokens sent: ${ethers.utils.formatUnits(amount, 18)} TestERC20 tokens`);

  await DAOTokenContract.balanceOf(vestingTokenContract.address)
    .then(value => {
      console.log("Balance on vesting token contract:", ethers.utils.formatUnits(value._hex, 18));
    })
    .catch(error => {
      console.log(error);
    });
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["Congress", "TokenVesting", "DAOToken"];
