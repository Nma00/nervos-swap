// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.6.6;

import "../interfaces/IERC20.sol";
import "../interfaces/IUniswapV2Router02.sol";
import "hardhat/console.sol";

contract LiquidityAdder {

    /*
        Installed on Ropsten at :
        0x70F36D8F3F8381AA15Ef68535eE38c6d3Ae4C689 
    */

    address private router;
    
    // Ropsten 
    /*address constant private router = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address constant private tokenA = 0x143C24dB897131438ABD86Db1E0be1Df9De902a9;
    address constant private tokenB = 0xf9c500D88f9b8779691c661A52B0CdA98f7Be9B2;*/

    // Godwoken
    /*address constant private router = 0x3Ea455fad8d7bdcEDC53aa1B76E019712D0e6134;
    address constant private tokenA = 0x5c6b21F26c2d4C3A9192C9C5e5edee630ACF0d89;
    address constant private tokenB = 0x83b18f52BAA89b583Dbe1c6072D14c0F6e3f5074;*/

    constructor(address _router) public {
        console.log("Deploying LiquidityAdder :", _router);
        router = _router;
    }

    function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired) public payable returns (uint amountA, uint amountB, uint liquidity) {

        require(IERC20(tokenA).approve(router, amountADesired), "Approve token A failed.");
        require(IERC20(tokenB).approve(router, amountBDesired), "Approve token B failed.");

        (amountA, amountB, liquidity) = IUniswapV2Router02(router).addLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            1,
            1,
            address(this),//msg.sender,
            1652614539
        );

        console.log("Amount A sent in pool:", amountA);
        console.log("Amount B sent in pool:", amountB);
        console.log("Liquidity pool token :", liquidity);
    }

}