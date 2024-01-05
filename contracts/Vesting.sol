// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Company: Decrypted Labs
// @title Vesting contract for ERC20 tokens
// @author Rabeeb Aqdas
/// @notice This contract allows for the vesting of ERC20 tokens with specific rules
/// @dev Inherits functions and modifiers from Ownable contract

/// @dev Error thrown when a user attempts to withdraw but doesn't have any funds vested
error Vesting__DontHaveFunds();

/// @dev Error thrown when a user attempts to withdraw but the locking period is not yet over
error Vesting__LockingPeriodIsNotOver();

/// @dev Error thrown when a user attempts to withdraw but there is no amount remaining to be withdrawn
error Vesting__NoAmountRemaining();
contract Vesting is Ownable {

    /// @notice Struct to keep track of each vesting transaction
    /// @param amountRemaining The amount of tokens remaining to be vested
    /// @param endTime The timestamp when the next vesting is due
    /// @param investor to ensure tx initiator is a investor
    struct Transaction {
        uint256 amountRemaining;
        uint256 endTime;
        uint256 amountToBeGiven;
        bool investor;
    }

    /// @notice Boolean flag to indicate if the contract is paused
    bool private pause;

    /// @notice Boolean flag to indicate if the contract has been initialized
    bool private _initialized;

    /// @notice Reference to the ERC20 token contract used for vesting
    IERC20 private _helperFennec;

    /// @notice Mapping to keep track of authorized addresses
    /// @dev Used to control access to certain functions in the contract
    mapping(address => bool) public authorized;

    /// @notice Mapping to store the transaction history for each user
    /// @dev Each user address is mapped to an array of Transaction structs
    mapping(address user => Transaction[] transaction) public txHistory;

    /// @notice Mapping to store the number of transactions for each user
    /// @dev Each user address is mapped according to their number of transactions
    mapping(address user => uint256) public noOfTx;

    /// @notice Emitted when the contract is paused
    event Paused(address indexed by);

    /// @notice Emitted when the contract is unpaused
    event UnPaused(address indexed by);

    /// @notice Emitted when a withdrawal is made
    event Withdrawed(address indexed by, uint256 amount, uint256 timeStamp);

    /// @notice Modifier to restrict functions to only authorized addresses
    modifier onlyAuthorized() {
        require(authorized[msg.sender], "Not authorized");
        _;
    }

    /// @notice Modifier to ensure functions are called when contract is not paused
    modifier unPaused() {
        require(pause == false, "contract is paused");
        _;
    }

    /// @notice Initializes the contract with the deployer as the owner
    constructor() Ownable(_msgSender()) {}

    /// @notice Initializes the vesting contract with token and ICO addresses
    /// @param _fennec Address of the ERC20 token being vested
    /// @param _ico Address of the ICO contract
    /// @dev This function can only be called once
    /// @custom:modifier onlyOwner Restricts the function access to the contract owner.
    function initialize(address _fennec, address _ico) external onlyOwner {
        require(!_initialized,"Already Initialized");
        _helperFennec = IERC20(_fennec);
        authorized[_fennec] = true;
        authorized[_ico] = true;

        _initialized = true;
    }

    /// @notice Allows authorized users to deposit tokens for vesting
    /// @param _userAddr Address of the user for whom tokens are vested
    /// @param _amount Total amount of tokens to be vested
    /// @param _amountToBeGiven Amount of tokens to be vested at each interval
    /// @param _investor to ensure tx initiator is a investor
    /// @custom:modifier onlyOwner Restricts the function access to the authorizer.
    function deposit(address _userAddr, uint256 _amount, uint256 _amountToBeGiven, bool _investor) external onlyAuthorized {
        txHistory[_userAddr].push(Transaction(_amount, (block.timestamp + 365 days), _amountToBeGiven,_investor));
        noOfTx[_userAddr] += 1;
    }

    /// @notice Allows users to withdraw their vested tokens
    /// @param _index Index of the transaction in the user's history
    /// @dev Emits a Withdrawed event upon successful withdrawal
    /// @custom:modifier unPaused Ensures the contract is not paused
    function withdraw(uint256 _index) external unPaused {
        uint256 length = txHistory[_msgSender()].length;
        if(length == 0 ) revert Vesting__DontHaveFunds();
        uint256 _amountToBeGiven = _withdraw(_msgSender(), _index);
        if(_amountToBeGiven == 0) revert Vesting__LockingPeriodIsNotOver();
        _helperFennec.transfer(_msgSender(), _amountToBeGiven);
        emit Withdrawed(_msgSender(), _amountToBeGiven, block.timestamp);
    }

    /// @notice Internal function to process withdrawals
    /// @param _user Address of the user withdrawing tokens
    /// @param _index Index of the transaction in the user's history
    /// @return _amountToBeGiven The amount of tokens the user is eligible to withdraw
    /// @dev Updates the transaction details after withdrawal
    function _withdraw(address _user, uint256 _index) private returns (uint256 _amountToBeGiven) {
        Transaction memory _details = txHistory[_user][_index];
        if(_details.amountRemaining == 0) revert Vesting__NoAmountRemaining();
        if(block.timestamp > _details.endTime) {
        if(_details.amountRemaining > _details.amountToBeGiven) {
        _amountToBeGiven = _details.amountToBeGiven;    
        _details.amountRemaining = _details.amountRemaining - _details.amountToBeGiven;
        }else {
        _amountToBeGiven = _details.amountRemaining;    
        _details.amountRemaining = 0;
        }
        if(_details.amountRemaining == 0) {
            _details.amountToBeGiven = 0;
            _details.endTime = 0;
        }else{
            uint256 daystoAdd = _details.investor ? 120 days : 180 days; 
            _details.endTime = block.timestamp + daystoAdd; 
        }
         txHistory[_user][_index] = _details;
        } 
    }

    /// @notice Pauses the contract
    /// @dev Only callable by the contract owner
    /// @custom:modifier onlyOwner Restricts the function access to the contract owner.
    function pauseContract() external onlyOwner {
        require(!pause, "Contract is already paused");
        pause = true;
       emit Paused (_msgSender());
    }   

    /// @notice Unpauses the contract
    /// @dev Only callable by the contract owner
    /// @custom:modifier onlyOwner Restricts the function access to the contract owner.
    function unPauseContract() external onlyOwner {
        require(pause, "Contract is already unpaused");
        pause = false;
        emit UnPaused(_msgSender());
    }    

    /// @notice Adds a new address to the list of authorized addresses
    /// @dev Can only be called by the contract owner
    /// @param _toAdd The address to be added to the authorized list
    /// @custom:modifier onlyOwner Restricts the function access to the contract owner.
    function addAuthorized(address _toAdd) external onlyOwner {
        require(_toAdd != address(0), "Invalid address");
        authorized[_toAdd] = true;
    }

    /// @notice Removes an address from the list of authorized addresses
    /// @dev Can only be called by the contract owner
    /// @param _toRemove The address to be removed from the authorized list
    /// @custom:modifier onlyOwner Restricts the function access to the contract owner.
    function removeAuthorized(address _toRemove) external onlyOwner {
        require(_toRemove != address(0), "Invalid address");
        authorized[_toRemove] = false;
    }

}