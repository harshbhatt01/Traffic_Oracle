const hre = require("hardhat");
const { Contract, ethers } = require('ethers');
const axios = require('axios');

async function main() {


  const api = await hre.ethers.getContractFactory("TrafficDataContract");
  const _api = await api.deploy();

  await _api.deployed();

  console.log(
    "Address :", _api.address
  );
  
  const endpoint1 = 52.41072
  const convertedEndpoint1 = endpoint1.toString();
  const endpoint2 = 4.84239
  const convertedEndpoint2 = endpoint2.toString();
  //console.log(convertedEndpoint1,convertedEndpoint2);
  const transactionResponse = await _api.inputCordinates(convertedEndpoint1,convertedEndpoint2)
  const transactionReceipt = await transactionResponse.wait()
  console.log(transactionReceipt.events[0].args._first)
  console.log(transactionReceipt.events[0].args._second)
  // Name = transactionReceipt.events[0].args.name_stock


  try {
        Name = (transactionReceipt.events[0].args._first+ ","+transactionReceipt.events[0].args._second)
        const apiKey = 'yHDTTjlXGJAflzZGWyFQMx0ZFKn0xivA';
        const TrafficAPI = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${apiKey}&point=${Name}`;
        const response = await axios.get(TrafficAPI);
        const TrafficData = response.data;
        freeFlowSpeed_ = TrafficData.flowSegmentData.freeFlowSpeed;
        currentTravelTime_ = TrafficData.flowSegmentData.currentTravelTime;
        freeFlowTravelTime_ = TrafficData.flowSegmentData.freeFlowTravelTime;
        console.log(freeFlowSpeed_,currentTravelTime_,freeFlowTravelTime_);
        
        const updateData = await _api.storeTrafficData(freeFlowSpeed_,currentTravelTime_,freeFlowTravelTime_);
        console.log(updateData);
        const finalData = await _api.getTrafficData()
        console.log(finalData)

  } catch (e) {
    console.error(e);
}
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});