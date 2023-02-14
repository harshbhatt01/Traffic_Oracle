// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "./TrafficDataOracle.sol";

contract Contract2 {
    TrafficDataOracle c1;
    bool payment;


    constructor(address _c1) public {
        c1 = TrafficDataOracle(_c1);
    }

    string first;
    string second;
    address public sender_address;
    int public _id;

    function requestAirData(string memory _first,string memory _second, address payable _sender_address) public payable returns (string memory,string memory, address, int, bool){
        (bool success) = c1.payForTrafficData{value:msg.value}();

        first = _first;
        second = _second;
        sender_address = _sender_address;
        (string memory fist, string memory sec, address sender, int id) = c1.add(_first,_second, _sender_address);
         _id = c1.id();
        return (fist,sec,sender,id,success);
    }

    function getData() public view returns(string memory,string memory, address, int){
        return(first,second,sender_address, _id);
    }

    function retreiveData(uint id) public view returns(uint, uint, uint){
        return c1.getTrafficData(id);
    }
}