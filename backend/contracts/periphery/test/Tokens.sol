// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.6.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenTest is ERC20 {

    uint128 constant INIT_SUPPLY = 100000;
    
    address private  _owner;

    constructor(string memory name, string memory symbol) public ERC20(name, symbol) {
        _owner = msg.sender;
        _mint(msg.sender, INIT_SUPPLY * 10**uint(decimals()));
    }
    
    modifier onlyOwner {
        require(msg.sender == _owner);
        _;
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount * 10**uint(decimals()));
    }
}

contract TokenA is TokenTest {
    constructor() public TokenTest("Token A", "TOKENA") {}
}

contract TokenB is TokenTest {
    constructor() public TokenTest("Token B", "TOKENB") {}
}