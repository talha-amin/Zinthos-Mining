// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error  Vesting__DontHaveFunds();
contract Vesting is Ownable {
struct History {
    uint256 amountRemaining;
    uint256 endTime;
    uint256 amountToBeGiven;
}

    mapping(address => bool) public authorized;
    mapping(address user => History[]) public txHistory;

    modifier onlyAuthorized() {
        require(authorized[msg.sender], "Not authorized");
        _;
    }

    constructor() Ownable(_msgSender()) {
    }

    function deposit(address _userAddr, uint256 _amount, uint256 _amountToBeGiven) external onlyAuthorized {
        txHistory[_userAddr].push(History(_amount, (block.timestamp + 485 days), _amountToBeGiven));
    }

    function withdraw() external {
        uint256 length = txHistory[_msgSender()].length;
        if(length == 0 ) revert Vesting__DontHaveFunds();
        uint256 _amountToBeGiven;
        for(uint256 i ; i < length ; ++i) {
            History memory _details = txHistory[_msgSender()][i];
            if(block.timestamp > _details.endTime && _details.amountRemaining > 0) {
            if(_details.amountRemaining > _details.amountToBeGiven) {
            _amountToBeGiven = _amountToBeGiven + _details.amountToBeGiven;    
            _details.amountRemaining = _details.amountRemaining - _details.amountToBeGiven;
            }else {
            _amountToBeGiven = _amountToBeGiven + _details.amountRemaining;    
            _details.amountRemaining = 0;
            }
             _details.endTime = block.timestamp + 120 days; 
             txHistory[_msgSender()][i] = _details;
            } 
        }
    }

    function addAuthorized(address _toAdd) external onlyOwner   {
        require(_toAdd != address(0));
        authorized[_toAdd] = true;
    }

    function removeAuthorized(address _toRemove) external onlyOwner   {
        require(_toRemove != address(0));
        require(_toRemove != msg.sender);
        authorized[_toRemove] = false;
    }

}