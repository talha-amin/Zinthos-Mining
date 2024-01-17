// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDT is ERC20, Ownable {
    constructor()
        ERC20("MyToken", "MTK")
        Ownable(_msgSender())
    {}

    function mint(uint256 amount) public {
        _mint(_msgSender(), amount);
    }

    function decimals() public pure override returns(uint8) {
        return 6;
    }
}