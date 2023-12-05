// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

    /* ========== ERRORS ========== */
error ICO__RoundsLimitExceeded(uint256 _round);
error ICO__InvalidPrice();
error ICO__RoundCompleted();
error ICO__NotEnoughTokens();
error ICO__RoundNotStartedYet();

contract FennecICO is Ownable{
    IERC20 private _helperFennec;
    IERC20 private _helperUSDT;
    uint256 private round;
    uint256 private pricePerToken;
    uint256 private roundOneLimitRemaining;
    uint256 private roundTwoLimitRemaining;
    uint256 private roundThreeLimitRemaining;
    address private immutable adminWallet;
    address private immutable vesting;
    bool private pause;

    /* ========== EVENTS ========== */
    event Paused(address indexed by);
    event UnPaused(address indexed by);
    event RoundStarted(address indexed by, uint256 round, uint256 roundPrice);
    event TokenBought(address indexed by, uint256 amount, uint256 round);

    /* ========== MODIFIER ======== */

    modifier unPaused() {
        require(pause == false, "contract is paused");
        _;
    }

    constructor(IERC20 _fennec, IERC20 _USDT, address _vesting, address _adminWallet, uint256 _roundOneLimitRemaining, uint256 _roundTwoLimitRemaining, uint256 _roundThreeLimitRemaining) Ownable(_msgSender()) {
        _helperFennec = _fennec;
        _helperUSDT = _USDT;
        vesting = _vesting;     
        adminWallet = _adminWallet;
        roundOneLimitRemaining = _roundOneLimitRemaining;
        roundTwoLimitRemaining = _roundTwoLimitRemaining;
        roundThreeLimitRemaining = _roundThreeLimitRemaining;
    }

    /* ========== MAIN FUNCTION ======== */

    function buy(uint256 _tokenAmount) external unPaused {
        if(round == 0) revert ICO__RoundNotStartedYet();
        if(round == 1) {
        uint256 _roundOneLimitRemaining = roundOneLimitRemaining;

        if(_roundOneLimitRemaining == 0) revert ICO__RoundCompleted();
        if(_tokenAmount > _roundOneLimitRemaining) revert ICO__NotEnoughTokens();
        _roundOne(_tokenAmount);

        }else if(round == 2){
        uint256 _roundTwoLimitRemaining = roundTwoLimitRemaining;

        if(_roundTwoLimitRemaining == 0) revert ICO__RoundCompleted();
        if(_tokenAmount > _roundTwoLimitRemaining) revert ICO__NotEnoughTokens();            
        _roundTwo(_tokenAmount);
 
        }else {
        uint256 _roundThreeLimitRemaining = roundThreeLimitRemaining;

        if(_roundThreeLimitRemaining == 0) revert ICO__RoundCompleted();
        if(_tokenAmount > _roundThreeLimitRemaining) revert ICO__NotEnoughTokens();            
        _roundThree(_tokenAmount);
        }
        emit TokenBought(_msgSender(), _tokenAmount, round);
    }

    /* ========== PRIVATE FUNCTIONS ======== */

    function _roundOne(uint256 _tokenAmount) private {
        uint256 _price = _tokenAmount * pricePerToken;
        _helperUSDT.transferFrom(_msgSender(), adminWallet, _price);
        _helperFennec.transfer(vesting, _tokenAmount);
        roundOneLimitRemaining = roundOneLimitRemaining - _tokenAmount;
    }
    function _roundTwo(uint256 _tokenAmount) private {
        uint256 _price = _tokenAmount * pricePerToken;
        _helperUSDT.transferFrom(_msgSender(), adminWallet, _price);
        _helperFennec.transfer(vesting, _tokenAmount);
        roundTwoLimitRemaining = roundTwoLimitRemaining - _tokenAmount;   
    }
    function _roundThree(uint256 _tokenAmount) private {
        uint256 _price = _tokenAmount * pricePerToken;
        _helperUSDT.transferFrom(_msgSender(), adminWallet, _price);
        _helperFennec.transfer(vesting, _tokenAmount);
        roundThreeLimitRemaining = roundThreeLimitRemaining - _tokenAmount;
    }

    /* ========== ONLY OWNER FUNCTIONS ======== */

    function startRound(uint256 _pricePerToken) external onlyOwner {
        uint256 _round = round;
        if(_round > 2) revert ICO__RoundsLimitExceeded(_round);
        if(_pricePerToken == 0) revert ICO__InvalidPrice();
        round = _round + 1;
        pricePerToken = _pricePerToken;
        emit RoundStarted(_msgSender(), (_round + 1), _pricePerToken);
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

    /* ========== GETTER FUNCTIONS ======== */

    function getRoundOneLimitRemaining() external view returns (uint256) {
        return roundOneLimitRemaining;
    } 

    function getRoundTwoLimitRemaining() external view returns (uint256) {
        return roundTwoLimitRemaining;
    } 

    function getRoundThreeLimitRemaining() external view returns (uint256) {
        return roundThreeLimitRemaining;
    } 

    function getRound() external view returns (uint256) {
        return round;
    } 

    function isPaused() external view returns (bool) {
        return pause;
    } 

}