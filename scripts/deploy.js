const hre = require("hardhat");
const axios = require('axios');

async function main() {

  const TrafficDataOracle = await hre.ethers.getContractFactory("TrafficDataOracle");
  const _TrafficDataOracle = await TrafficDataOracle.deploy();

  await _TrafficDataOracle.deployed();

  console.log(
    "TrafficData_Oracle_Address :", _TrafficDataOracle.address
  );

  const UserContract = await hre.ethers.getContractFactory("Contract2");
  const _UserContract = await UserContract.deploy(_TrafficDataOracle.address);

  await _UserContract.deployed();

  console.log(
    "UserContract_Address :", _UserContract.address
  );
}
main()