// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.6.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenA is ERC20 {
    constructor() public ERC20("Token A", "TOKENA") {
        _mint(msg.sender, 100000 * 10**uint(decimals()));
    }
}

contract TokenB is ERC20 {
    constructor() public ERC20("Token B", "TOKENB") {
        _mint(msg.sender, 100000 * 10**uint(decimals()));
    }
}