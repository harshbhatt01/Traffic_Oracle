// const { Contract, ethers } = require('ethers');
// const axios = require('axios');

// // async function getStockData(){

// //     const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

// //     const abi = [
// //         {
// //           "anonymous": false,
// //           "inputs": [
// //             {
// //               "indexed": false,
// //               "internalType": "string",
// //               "name": "name_stock",
// //               "type": "string"
// //             }
// //           ],
// //           "name": "stock",
// //           "type": "event"
// //         },
// //         {
// //           "inputs": [
// //             {
// //               "internalType": "string",
// //               "name": "name_stock",
// //               "type": "string"
// //             }
// //           ],
// //           "name": "getStock",
// //           "outputs": [
// //             {
// //               "internalType": "string",
// //               "name": "",
// //               "type": "string"
// //             },
// //             {
// //               "internalType": "string",
// //               "name": "",
// //               "type": "string"
// //             },
// //             {
// //               "internalType": "string",
// //               "name": "",
// //               "type": "string"
// //             }
// //           ],
// //           "stateMutability": "view",
// //           "type": "function"
// //         },
// //         {
// //           "inputs": [
// //             {
// //               "internalType": "string",
// //               "name": "name_stock",
// //               "type": "string"
// //             }
// //           ],
// //           "name": "requestStock",
// //           "outputs": [
// //             {
// //               "internalType": "string",
// //               "name": "",
// //               "type": "string"
// //             }
// //           ],
// //           "stateMutability": "nonpayable",
// //           "type": "function"
// //         },
// //         {
// //           "inputs": [
// //             {
// //               "internalType": "string",
// //               "name": "",
// //               "type": "string"
// //             }
// //           ],
// //           "name": "stockData",
// //           "outputs": [
// //             {
// //               "internalType": "string",
// //               "name": "open",
// //               "type": "string"
// //             },
// //             {
// //               "internalType": "string",
// //               "name": "high",
// //               "type": "string"
// //             },
// //             {
// //               "internalType": "string",
// //               "name": "low",
// //               "type": "string"
// //             }
// //           ],
// //           "stateMutability": "view",
// //           "type": "function"
// //         },
// //         {
// //           "inputs": [
// //             {
// //               "internalType": "string",
// //               "name": "name_stock",
// //               "type": "string"
// //             },
// //             {
// //               "internalType": "string",
// //               "name": "_open",
// //               "type": "string"
// //             },
// //             {
// //               "internalType": "string",
// //               "name": "_high",
// //               "type": "string"
// //             },
// //             {
// //               "internalType": "string",
// //               "name": "_low",
// //               "type": "string"
// //             }
// //           ],
// //           "name": "updateWeather",
// //           "outputs": [],
// //           "stateMutability": "nonpayable",
// //           "type": "function"
// //         }
// //             ]

// //     const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
// //     const signer = provider.getSigner()
// //     const contract = new Contract(ContractAddress, abi, signer)

// //     const getData = await contract.requestStock("AAPL")
// //     const getDataRecipt = await getData.wait()

// //     const Name = getDataRecipt.events[0].args.name_stock;


// //     var [_open, _high, _low ] = await getStockDataOffChain(Name)
// //     _open = _open.toString()
// //     _high = _high.toString()
// //     _low = _low.toString()
 
// //     const updateData = await contract.updateWeather(Name,_open, _high, _low)
// //    // console.log(updateData);
// //     const finalData = await contract.getStock(Name)
// //     console.log(finalData)


// // }

// async function getStockDataOffChain(){
//     try {
//       const endpoint11 = 52.41072
//       const convertedEndpoint1 = endpoint11.toString();
//       const endpoint21 = 4.84239
//       const convertedEndpoint2 = endpoint21.toString();
//       console.log(convertedEndpoint1,convertedEndpoint2);

//         const endpoint1 = 52.41072
//         const endpoint2 = 4.84239
//         const add = (endpoint1+","+endpoint2)
//         console.log(add);
//         const apiKey = 'yHDTTjlXGJAflzZGWyFQMx0ZFKn0xivA';
//         const TrafficAPI = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${apiKey}&point=${add}`;
//         const response = await axios.get(TrafficAPI);
//         const TrafficData = response.data;
//         //console.log(StockData);
//         freeFlowSpeed_ = TrafficData.flowSegmentData.freeFlowSpeed;
//         currentTravelTime_ = TrafficData.flowSegmentData.currentTravelTime;
//         freeFlowTravelTime_ = TrafficData.flowSegmentData.freeFlowTravelTime;
//         console.log(freeFlowSpeed_,currentTravelTime_,freeFlowTravelTime_);
//         // return [open_,high_,low_]
//       } catch (error) {
//         console.error(error);
//       }
// }
// getStockDataOffChain()

