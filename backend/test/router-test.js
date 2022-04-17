const { expect } = require("chai");
const { ethers } = require("hardhat");

const overrides = { gasLimit: 300000000 }

let signer, router, tokenA, tokenB;

async function showBalance() {
    console.log("Signer's balance :", "CKB", ethers.utils.formatUnits(await signer.getBalance(), 8));    
    for (let token of [tokenA, tokenB]) {
        let name = await token.name(), balance = await token.balanceOf(signer.address);
        console.log("Signer's balance :", name, ethers.utils.formatUnits(balance));    
    }
};

before(async function () {
    [signer] = await ethers.getSigners();
    console.log("Signer:", signer.address);

    const TokenA = await ethers.getContractFactory("TokenA");
    tokenA = await TokenA.deploy();
    await tokenA.deployed();
    console.log("TokenA deployed to:", tokenA.address);

    const TokenB = await ethers.getContractFactory("TokenB");
    tokenB = await TokenB.deploy();
    await tokenB.deployed();
    console.log("TokenB deployed to:", tokenB.address);

    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    const uniswapV2Factory = await UniswapV2Factory.deploy(ethers.constants.AddressZero);
    await uniswapV2Factory.deployed();
    console.log("UniswapV2Factory deployed to:", uniswapV2Factory.address);

    const PCKB = await ethers.getContractFactory("WETH");
    const pCKB = await PCKB.deploy();
    await pCKB.deployed();
    console.log("CKB ERC20 (pCKB) deployed to:", pCKB.address);

    const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
    router = await UniswapV2Router02.deploy(uniswapV2Factory.address, pCKB.address);
    await router.deployed();
    console.log(`UniswapV2Router02 deployed to: ${router.address}\n`);
});

describe("Add Liquidity", function () {  
    
    it("IT addLiquidity", async function () {

        let tx; 
        let amountA = ethers.utils.parseUnits("100");
        let amountB = ethers.utils.parseUnits("500");

        tx = await tokenA.approve(router.address, amountA, overrides);
        await tx.wait();

        tx = await tokenB.approve(router.address, amountB, overrides);
        await tx.wait();

        await showBalance();

        console.log(`addLiquidity : TokenA ${ethers.utils.formatUnits(amountA)} / TokenB ${ethers.utils.formatUnits(amountB)}`);

        tx = await router.addLiquidity(
            tokenA.address,
            tokenB.address,
            amountA,
            amountB,
            ethers.constants.Zero,
            ethers.constants.Zero,
            signer.address,
            ethers.constants.MaxUint256, 
            overrides);
        await tx.wait();

        await showBalance();
    });

    it("IT addLiquidityCKB", async function () {

        let amountA = ethers.utils.parseUnits("100");
        let amountCKB = ethers.utils.parseUnits("1", 8);

        let tx = await tokenA.approve(router.address, amountA, overrides);
        await tx.wait();

        await showBalance();

        console.log(`addLiquidityETH : TokenA ${ethers.utils.formatUnits(amountA)} / TokenCKB ${ethers.utils.formatUnits(amountCKB, 8)}`);

        const options = {
            value: amountCKB,
            gasLimit: overrides.gasLimit
        }

        tx = await router.addLiquidityETH(
            tokenA.address,
            amountA,
            ethers.constants.Zero,
            ethers.constants.Zero,
            signer.address,
            ethers.constants.MaxUint256, 
            options);
        await tx.wait();

        await showBalance();
    });

    it("IT LiquidityAdder", async function () {
        const LiquidAdder = await ethers.getContractFactory("LiquidityAdder");
        const liquidAdder = await LiquidAdder.deploy(router.address);
        await liquidAdder.deployed();
        console.log("LiquidAdder deployed to:", liquidAdder.address);

        await showBalance();

        let tx; 
        let amountA = ethers.utils.parseUnits("1000");
        let amountB = ethers.utils.parseUnits("2000");

        console.log(`LiquidityAdder : TokenA ${ethers.utils.formatUnits(amountA)} / TokenB ${ethers.utils.formatUnits(amountB)}`);

        tx = await tokenA.transfer(liquidAdder.address, amountA, overrides);
        await tx.wait();

        tx = await tokenB.transfer(liquidAdder.address, amountB, overrides);
        await tx.wait();

        tx = await liquidAdder.addLiquidity(tokenA.address, tokenB.address, amountA, amountB, overrides);
        await tx.wait();

        await showBalance();
    });

});