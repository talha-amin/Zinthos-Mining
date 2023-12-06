// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error  Vesting__DontHaveFunds();
error  Vesting__LockingPeriodIsNotOver();
contract Vesting is Ownable {

struct Transaction {
    uint256 amountRemaining;
    uint256 endTime;
    uint256 amountToBeGiven;
}

    bool private pause;
    bool private _initialized;
    IERC20 private _helperFennec;

    mapping(address => bool) public authorized;
    mapping(address user => Transaction[]) public txHistory;

    event Paused(address indexed by);

    event UnPaused(address indexed by);

    event Withdrawed(address indexed by, uint256 amount, uint256 timeStamp);

    modifier onlyAuthorized() {
        require(authorized[msg.sender], "Not authorized");
        _;
    }

    modifier unPaused() {
        require(pause == false, "contract is paused");
        _;
    }

    constructor() Ownable(_msgSender()) {}

        function initialize(address _fennec, address _ico) external onlyOwner {
        require(!_initialized,"Already Initialized");
        _helperFennec = IERC20(_fennec);
        authorized[_fennec] = true;
        authorized[_ico] = true;
        _initialized = true;
    }

    function deposit(address _userAddr, uint256 _amount, uint256 _amountToBeGiven) external onlyAuthorized {
        txHistory[_userAddr].push(Transaction(_amount, (block.timestamp + 485 days), _amountToBeGiven));
    }

    function withdraw() external unPaused {
        uint256 length = txHistory[_msgSender()].length;
        if(length == 0 ) revert Vesting__DontHaveFunds();
        uint256 _amountToBeGiven;
        for(uint256 i ; i < length ; ++i) {
            Transaction memory _details = txHistory[_msgSender()][i];
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
        if(_amountToBeGiven == 0) revert Vesting__LockingPeriodIsNotOver();
        _helperFennec.transfer(_msgSender(), _amountToBeGiven);
        emit Withdrawed(_msgSender(), _amountToBeGiven, block.timestamp);
    }

    function pauseContract() external onlyOwner {
        require(!pause, "Contract is already paused");
        pause = true;
       emit Paused (_msgSender());
    }   


    function unPauseContract() external onlyOwner {
        require(pause, "Contract is already unpaused");
        pause = false;
        emit UnPaused(_msgSender());
    }   

    function addAuthorized(address _toAdd) external onlyOwner {
        require(_toAdd != address(0));
        authorized[_toAdd] = true;
    }

    function removeAuthorized(address _toRemove) external onlyOwner {
        require(_toRemove != address(0));
        authorized[_toRemove] = false;
    }

}