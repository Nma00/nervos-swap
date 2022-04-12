const { ethers } = require('hardhat');

async function main() {

   [owner] = await ethers.getSigners();
   deployerAddress = owner.address;
   console.log(`Owner : ${deployerAddress}`);

   const ckbERC20 = "0x4B6DFa286F196F61134b03e783d73708687B93D0";

   /*const weth = await ethers.getContractFactory('WETH');
   const wethInstance = await weth.deploy();
   await wethInstance.deployed();

   console.log(`WETH deployed to : ${wethInstance.address}`);*/

   const factory = await ethers.getContractFactory('UniswapV2Factory');
   const factoryInstance = await factory.deploy(deployerAddress);
   await factoryInstance.deployed();

   console.log(`Factory deployed to : ${factoryInstance.address}`);

   const router = await ethers.getContractFactory('UniswapV2Router02');
   const routerInstance = await router.deploy(
      factoryInstance.address,
      ckbERC20
   );
   await routerInstance.deployed();

   console.log(`Router V02 deployed to :  ${routerInstance.address}`);

   const multicall = await ethers.getContractFactory('Multicall');
   const multicallInstance = await multicall.deploy();
   await multicallInstance.deployed();

   console.log(`Multicall deployed to : ${multicallInstance.address}`);
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
