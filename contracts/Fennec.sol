// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// Company: Decrypted Labs
/// @title FennecToken  
/// @author Rabeeb Aqdas
/// @notice An ERC20 token contract for the Fennec ecosystem.
/// @dev Inherits ERC20 standard token functionality from OpenZeppelin and ownership functionality.

interface IVesting {
    function deposit(address _userAddr, uint256 _amount, uint256 _amountToBeGiven) external;
}

contract Fennec is ERC20, Ownable {

    // Tokenomics constants
    uint256 public constant TOTAL_SUPPLY = 300_000_000 * 10**18; // 300 million tokens 
    uint256 public constant GAMING = (TOTAL_SUPPLY * 40) / 100;
    uint256 public constant ECOSYSTEM_DEVELOPMENT_PARTNERSHIPS = (TOTAL_SUPPLY * 15) / 100;
    uint256 public constant PRIVATE_ICO = (TOTAL_SUPPLY * 10) / 100;
    uint256 public constant TEAM_ADVISORS = (TOTAL_SUPPLY * 10) / 100;
    uint256 public constant MARKETING_COMMUNITY = (TOTAL_SUPPLY * 10) / 100;
    uint256 public constant LIQUIDITY_PROVISION = (TOTAL_SUPPLY * 5) / 100;
    uint256 public constant STRATEGIC_RESERVE = (TOTAL_SUPPLY * 5) / 100;
    uint256 public constant STAKING_REWARDS = (TOTAL_SUPPLY * 3) / 100;
    uint256 public constant PUBLIC_SALE = (TOTAL_SUPPLY * 2) / 100;

    /// @dev Reference to the vesting contract where purchased tokens are sent
    IVesting private immutable _helperVesting;

    /// @dev The PERCENTAGE by which Team Advisors, _marketing_community and _ecosystem_development_partnerships will withdraw the tokens from vesting contract
    uint256 private constant PERCENTAGE = 25;

    /// @dev The BASE for calculating the percentage
    uint256 private constant BASE = 100;

    // Destination addresses for token allocation
    address private immutable gaming;
    address private immutable ecosystem_development_partnerships;
    address private immutable team_advisors;
    address private immutable marketing_community;
    address private immutable liquidity_provision;
    address private immutable strategic_reserve;
    address private immutable staking_rewards;
    address private immutable publicsale;

    // State variable to ensure initialization happens only once
    bool private _initialized;

    /// @notice Constructor to create FennecToken
    /// @dev Sets up the token name, symbol, and initial distribution addresses.
    /// @param _vesting Address of the vesting contract
    /// @param _gaming Address for gaming allocation
    /// @param _ecosystem_development_partnerships Address for ecosystem development and partnerships
    /// @param _team_advisors Address for team and advisors
    /// @param _marketing_community Address for marketing and community
    /// @param _liquidity_provision Address for liquidity provision
    /// @param _strategic_reserve Address for strategic reserve
    /// @param _staking_rewards Address for staking rewards
    /// @param _publicsale Address for public sale
    constructor(
        IVesting _vesting,
        address _gaming,
        address _ecosystem_development_partnerships,
        address _team_advisors,
        address _marketing_community,
        address _liquidity_provision,
        address _strategic_reserve,
        address _staking_rewards,
        address _publicsale
        ) ERC20("Ferren Token", "FTK") Ownable(_msgSender()) {
       _helperVesting = _vesting;
       gaming = _gaming;
       ecosystem_development_partnerships = _ecosystem_development_partnerships;
       team_advisors = _team_advisors; 
       marketing_community = _marketing_community;
       liquidity_provision = _liquidity_provision; 
       strategic_reserve = _strategic_reserve; 
       staking_rewards = _staking_rewards; 
       publicsale = _publicsale; 
    }

    /// @notice Initialize token distribution to the predefined addresses.
    /// @dev Mints tokens to the respective addresses based on the allocation percentages.
    /// Can only be called once by the contract owner.
    /// @param _privateICO Address of private ICO
    /// @custom:modifier onlyOwner Restricts the function access to the contract owner.
    function initialize(address _privateICO) external onlyOwner {
        require(!_initialized,"Already Initialized");
        uint256 _ECOSYSTEM_DEVELOPMENT_PARTNERSHIPS = ECOSYSTEM_DEVELOPMENT_PARTNERSHIPS;
        uint256 _TEAM_ADVISORS = TEAM_ADVISORS;
        uint256 _MARKETING_COMMUNITY = MARKETING_COMMUNITY;
        uint256 _PERCENTAGE = PERCENTAGE;
        uint256 _BASE = BASE;
        _mint(gaming,GAMING);
        _mint(address(_helperVesting),(_ECOSYSTEM_DEVELOPMENT_PARTNERSHIPS + _TEAM_ADVISORS + _MARKETING_COMMUNITY));
        _mint(_privateICO,PRIVATE_ICO); 
        _mint(liquidity_provision,LIQUIDITY_PROVISION);
        _mint(strategic_reserve,STRATEGIC_RESERVE);
        _mint(staking_rewards,STAKING_REWARDS);
        _mint(publicsale,PUBLIC_SALE);

        _helperVesting.deposit(ecosystem_development_partnerships, _ECOSYSTEM_DEVELOPMENT_PARTNERSHIPS, ((_ECOSYSTEM_DEVELOPMENT_PARTNERSHIPS * _PERCENTAGE) / _BASE));
        _helperVesting.deposit(team_advisors, _TEAM_ADVISORS, ((_TEAM_ADVISORS * _PERCENTAGE) / _BASE));
        _helperVesting.deposit(marketing_community, _MARKETING_COMMUNITY, ((_MARKETING_COMMUNITY * _PERCENTAGE) / _BASE));

        _initialized = true;
    }

}