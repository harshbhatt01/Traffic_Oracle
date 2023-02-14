// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TrafficDataOracle is Ownable{

    struct TrafficdataStruct{
        uint _freeFlowSpeed;
        uint _currentTravelTime;
        uint _freeFlowTravelTime;
    }

    mapping(uint => TrafficdataStruct) public data;
    address public payer;

    struct Co_ordinates{
        string first;
        string second;
        address sender;
    }

    int public id = -1;
    event TrafficDataUpdated(string first, string second, address sender, int id);

     modifier onlyPayer{
        require(tx.origin == payer, "Not the payer broooo");
        _;
    }

    Co_ordinates[] public people;

    function add(string memory first,string memory second, address payable sender) public onlyPayer returns (string memory,string memory,address,int){
        people.push(Co_ordinates({first : first, second: second, sender : sender}));
        id++;
        emit TrafficDataUpdated(first,second,sender,id);
        return (first,second,sender,id);
    }

    function payForTrafficData() public payable returns(bool){
        require(msg.value >= 1 ether, "Payment must be at least 1 ether");
        payer = payable(tx.origin);
        return true;
    }

     function storeTrafficData(uint freeFlowSpeed, uint currentTravelTime,uint freeFlowTravelTime, uint _id) onlyOwner public {
        data[_id] = TrafficdataStruct(freeFlowSpeed,currentTravelTime,freeFlowTravelTime);
    }

    function getTrafficData(uint _id) public view onlyPayer returns (uint,uint,uint){
        return( data[_id]._freeFlowSpeed, data[_id]._currentTravelTime, data[_id]._freeFlowTravelTime);
    }
    
}
