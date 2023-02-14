const { Contract, ethers } = require('ethers');
const axios = require('axios');
const {UserContractTaffic_ABI, TrafficdataOracle_ABI} = require("../Constraints/abi.js")

async function getStockData(){
    const userContractAddress = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1"
    const TrafficData_Oracle_Address = "0x0B306BF915C4d645ff596e518fAf3F9669b97016"
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner()
    const TrafficuserContract = new Contract(userContractAddress, UserContractTaffic_ABI, signer)
    const TrafficoracleContract = new Contract(TrafficData_Oracle_Address, TrafficdataOracle_ABI, signer)
   
    const endpoint1 = 52.41072
    const convertedEndpoint1 = endpoint1.toString();
    const endpoint2 = 4.84239
    const convertedEndpoint2 = endpoint2.toString();
    //console.log(convertedEndpoint1,convertedEndpoint2);
    const xyz = await TrafficuserContract.requestAirData(convertedEndpoint1,convertedEndpoint2,"0x2546BcD3c84621e976D8185a91A922aE77ECEc30",{value:ethers.utils.parseEther("2"), gasLimit : 300000})
    const data = await TrafficuserContract.getData()
    const a = data[0];
    const b = data[1];
    const c = data[2]
    const id = data[3]
    const transactionResponse = await TrafficoracleContract.add(a,b,c)
    const transactionReceipt = await transactionResponse.wait()
    console.log(transactionReceipt.events[0].args.first)
    console.log(transactionReceipt.events[0].args.second)
  
  
    try {
      Name = (transactionReceipt.events[0].args.first+ ","+transactionReceipt.events[0].args.second)
      const apiKey = 'yHDTTjlXGJAflzZGWyFQMx0ZFKn0xivA';
      const TrafficAPI = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${apiKey}&point=${Name}`;
      const response = await axios.get(TrafficAPI);
      const TrafficData = response.data;
      freeFlowSpeed_ = TrafficData.flowSegmentData.freeFlowSpeed;
      currentTravelTime_ = TrafficData.flowSegmentData.currentTravelTime;
      freeFlowTravelTime_ = TrafficData.flowSegmentData.freeFlowTravelTime;
      console.log(freeFlowSpeed_,currentTravelTime_,freeFlowTravelTime_);
      
      const updateData = await TrafficoracleContract.storeTrafficData(freeFlowSpeed_,currentTravelTime_,freeFlowTravelTime_,id);
      //console.log(updateData);
      const finalData = await TrafficoracleContract.getTrafficData(id)
      console.log(finalData.toString())

      //retreiveing back to user's contract
      const getdata = await TrafficuserContract.retreiveData(id)
      console.log(getdata.toString());


} catch (e) {
  console.error(e);
}
  }
  
  getStockData().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });