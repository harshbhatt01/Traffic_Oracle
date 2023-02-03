// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract TrafficDataContract {
    uint freeFlowSpeed;
    uint currentTravelTime;
    uint freeFlowTravelTime;

     event getCordinatesEvent(
        string _first,
        string _second
    );
     
   function inputCordinates(string memory _first, string memory _second) public {
       emit getCordinatesEvent(_first, _second);
   }

   function storeTrafficData(uint _freeFlowSpeed, uint _currentTravelTime, uint _freeFlowTravelTime) public {
       freeFlowSpeed = _freeFlowSpeed;
       currentTravelTime = _currentTravelTime; 
       freeFlowTravelTime = _freeFlowTravelTime;
    }

    function getTrafficData() public view returns(uint,uint,uint){
        return(freeFlowSpeed,currentTravelTime,freeFlowTravelTime); 
    }
}


