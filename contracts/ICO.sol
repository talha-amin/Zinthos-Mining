// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Company: Decrypted Labs
// @title FennecICO - Initial Coin Offering contract for Fennec Tokens  
// @author Rabeeb Aqdas
// @notice This contract manages the different rounds of the ICO for the Fennec token

interface IVesting {
    function deposit(address _userAddr, uint256 _amount, uint256 _amountToBeGiven) external;
}

    /// @dev Error for when an attempt is made to proceed to a round beyond the defined limits
    /// @param _round The round number that exceeded the limit
    error ICO__RoundsLimitExceeded(uint256 _round);

    /// @dev Error for when an invalid price (e.g., zero) is set for a round
    error ICO__InvalidPrice();

    /// @dev Error for when an action is attempted in a round that has already been completed
    error ICO__RoundCompleted();

    /// @dev Error for when there are not enough tokens remaining in a round for a purchase
    error ICO__NotEnoughTokens();

    /// @dev Error for when an action is attempted in a round that has not yet started
    error ICO__RoundNotStartedYet();

contract FennecICO is Ownable{

     /// @dev Reference to the Fennec token contract
    IERC20 private immutable _helperFennec;

    /// @dev Reference to the USDT token contract used for payments
    IERC20 private immutable _helperUSDT;

    /// @dev Reference to the vesting contract where purchased tokens are sent
    IVesting private immutable _helperVesting;

    /// @dev Tracks the current round of the ICO
    uint256 private round;

    /// @dev The price per token for the current round
    uint256 private pricePerToken;

    /// @dev The PERCENTAGE by which investor will withdraw the tokens from vesting contract
    uint256 private constant PERCENTAGE = 10;

    /// @dev The BASE for calculating the percentage
    uint256 private constant BASE = 100;

    /// @dev The remaining token limit for round one
    uint256 private roundOneLimitRemaining;

    /// @dev The remaining token limit for round two
    uint256 private roundTwoLimitRemaining;

    /// @dev The remaining token limit for round three
    uint256 private roundThreeLimitRemaining;

    /// @dev The wallet address where funds collected from the ICO are sent
    address private immutable adminWallet;

    /// @dev Flag to indicate if the ICO is paused or not
    bool private pause;

    /// @notice Emitted when the contract is paused
    /// @param by The address that triggered the pause
    event Paused(address indexed by);
    /// @notice Emitted when the contract is unpaused
    /// @param by The address that triggered the unpausing
    event UnPaused(address indexed by);
    /// @notice Emitted when a new round starts
    /// @param by The address that started the round
    /// @param round The current round number
    /// @param roundPrice The price per token for this round
    event RoundStarted(address indexed by, uint256 round, uint256 roundPrice);
    /// @notice Emitted when tokens are bought
    /// @param by The address that bought the tokens
    /// @param amount The amount of tokens bought
    /// @param round The round in which the tokens were bought
    event TokenBought(address indexed by, uint256 amount, uint256 round);

    /// @dev Ensures the contract is not paused
    modifier unPaused() {
        require(pause == false, "contract is paused");
        _;
    }

    /// @notice Creates a new FennecICO contract instance
    /// @param _fennec Address of the Fennec token contract
    /// @param _USDT Address of the USDT token contract
    /// @param _vesting Address of the vesting contract
    /// @param _adminWallet Address of the admin wallet
    /// @param _roundOneLimitRemaining Token limit for round one
    /// @param _roundTwoLimitRemaining Token limit for round two
    /// @param _roundThreeLimitRemaining Token limit for round three
    constructor(IERC20 _fennec, IERC20 _USDT, IVesting _vesting, address _adminWallet, uint256 _roundOneLimitRemaining, uint256 _roundTwoLimitRemaining, uint256 _roundThreeLimitRemaining) Ownable(_msgSender()) {
        _helperFennec = _fennec;
        _helperUSDT = _USDT;
        _helperVesting = _vesting;     
        adminWallet = _adminWallet;
        roundOneLimitRemaining = _roundOneLimitRemaining;
        roundTwoLimitRemaining = _roundTwoLimitRemaining;
        roundThreeLimitRemaining = _roundThreeLimitRemaining;
    }

    /// @notice Allows users to buy tokens
    /// @dev Checks the current round and calls the respective internal function for the round
    /// @dev Ensures the contract is not paused
    /// @param _tokenAmount The amount of tokens to buy
    function buy(uint256 _tokenAmount) external unPaused {
        if(round == 0) revert ICO__RoundNotStartedYet();
        if(round == 1) {
        uint256 _roundOneLimitRemaining = roundOneLimitRemaining;

        if(_roundOneLimitRemaining == 0) revert ICO__RoundCompleted();
        if(_tokenAmount > _roundOneLimitRemaining) revert ICO__NotEnoughTokens();
        _roundOne(_msgSender(), _tokenAmount);

        }else if(round == 2){
        uint256 _roundTwoLimitRemaining = roundTwoLimitRemaining;

        if(_roundTwoLimitRemaining == 0) revert ICO__RoundCompleted();
        if(_tokenAmount > _roundTwoLimitRemaining) revert ICO__NotEnoughTokens();            
        _roundTwo(_msgSender(), _tokenAmount);
 
        }else {
        uint256 _roundThreeLimitRemaining = roundThreeLimitRemaining;

        if(_roundThreeLimitRemaining == 0) revert ICO__RoundCompleted();
        if(_tokenAmount > _roundThreeLimitRemaining) revert ICO__NotEnoughTokens();            
        _roundThree(_msgSender(), _tokenAmount);
        }
        emit TokenBought(_msgSender(), _tokenAmount, round);
    }

    
     // @dev Handles token purchases for Round One
     // Transfers USDT from the buyer to the admin wallet and transfers the corresponding
     // amount of Fennec tokens to the vesting contract.
     // Updates the remaining token limit for Round One.
     // @param _user The address of user who is buying
     // @param _tokenAmount The amount of tokens being purchased
    function _roundOne(address _user, uint256 _tokenAmount) private {
        uint256 _price = (_tokenAmount * pricePerToken) / 1e18;
        _helperUSDT.transferFrom(_user, adminWallet, _price);
        _helperFennec.transfer(address(_helperVesting), _tokenAmount);
        _helperVesting.deposit(_user, _tokenAmount, ((_tokenAmount * PERCENTAGE) / BASE));
        roundOneLimitRemaining = roundOneLimitRemaining - _tokenAmount;
    }
    
    
     // @dev Handles token purchases for Round Two
     // Similar to _roundOne, but updates the remaining token limit for Round Two.
     // @param _user The address of user who is buying
     // @param _tokenAmount The amount of tokens being purchased
    function _roundTwo(address _user, uint256 _tokenAmount) private {
        uint256 _price = (_tokenAmount * pricePerToken) / 1e18;
        _helperUSDT.transferFrom(_user, adminWallet, _price);
        _helperFennec.transfer(address(_helperVesting), _tokenAmount);
        _helperVesting.deposit(_user, _tokenAmount, ((_tokenAmount * PERCENTAGE) / BASE));
        roundTwoLimitRemaining = roundTwoLimitRemaining - _tokenAmount;   
    }
    
    
     // @dev Handles token purchases for Round Three
     // Similar to _roundOne and _roundTwo, but updates the remaining token limit for Round Three.
     // @param _user The address of user who is buying
     // @param _tokenAmount The amount of tokens being purchased
    function _roundThree(address _user, uint256 _tokenAmount) private {
        uint256 _price = (_tokenAmount * pricePerToken) / 1e18;
        _helperUSDT.transferFrom(_user, adminWallet, _price);
        _helperFennec.transfer(address(_helperVesting), _tokenAmount);
        _helperVesting.deposit(_user, _tokenAmount, ((_tokenAmount * PERCENTAGE) / BASE));
        roundThreeLimitRemaining = roundThreeLimitRemaining - _tokenAmount;
    }

    /// @notice Starts a new round of the ICO
    /// @dev Only callable by the contract owner
    /// @param _pricePerToken The price per token for the new round
    function startRound(uint256 _pricePerToken) external onlyOwner {
        uint256 _round = round;
        if(_round > 2) revert ICO__RoundsLimitExceeded(_round);
        if(_pricePerToken == 0) revert ICO__InvalidPrice();
        round = _round + 1;
        pricePerToken = _pricePerToken;
        emit RoundStarted(_msgSender(), (_round + 1), _pricePerToken);
    }

    /// @notice Withdraws the tokens from the contract
    /// @dev Only callable by the contract owner
    /// @param _amountOfTokens The amount of token to withdraw
    function withdrawTokens(uint256 _amountOfTokens) external onlyOwner {
    _helperFennec.transfer(_msgSender(), _amountOfTokens);
    }

    /// @notice Pauses the contract
    /// @dev Only callable by the contract owner
    function pauseContract() external onlyOwner {
        require(!pause, "Contract is already paused");
        pause = true;
       emit Paused (_msgSender());
    }   

    /// @notice Unpauses the contract
    /// @dev Only callable by the contract owner
    function unPauseContract() external onlyOwner {
        require(pause, "Contract is already unpaused");
        pause = false;
        emit UnPaused(_msgSender());
    }   

    /// @notice Retrieves the remaining token limit for Round One
    /// @return The number of tokens still available for purchase in Round One
    function getRoundOneLimitRemaining() external view returns (uint256) {
        return roundOneLimitRemaining;
    } 

    /// @notice Retrieves the remaining token limit for Round Two
    /// @return The number of tokens still available for purchase in Round Two
    function getRoundTwoLimitRemaining() external view returns (uint256) {
        return roundTwoLimitRemaining;
    } 

    /// @notice Retrieves the remaining token limit for Round Three
    /// @return The number of tokens still available for purchase in Round Three
    function getRoundThreeLimitRemaining() external view returns (uint256) {
        return roundThreeLimitRemaining;
    } 

    /// @notice Retrieves the current round of the ICO
    /// @return The current round number of the ICO
    function getRound() external view returns (uint256) {
        return round;
    } 

    /// @notice Checks if the ICO contract is currently paused
    /// @return True if the contract is paused, false otherwise
    function isPaused() external view returns (bool) {
        return pause;
    } 

}