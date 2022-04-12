const { ethers } = require('hardhat');

async function main() {

   [owner] = await ethers.getSigners();
   deployerAddress = owner.address;
   console.log(`Owner : ${deployerAddress}`);

   const WETH = "0xc778417e063141139fce010982780140aa0cd5ab";

   console.log(`WETH Ropsten : ${WETH}`);

   const factory = await ethers.getContractFactory('UniswapV2Factory');
   const factoryInstance = await factory.deploy(deployerAddress);
   await factoryInstance.deployed();

   console.log(`Factory deployed to : ${factoryInstance.address}`);

   const router = await ethers.getContractFactory('UniswapV2Router02');
   const routerInstance = await router.deploy(
      factoryInstance.address,
      WETH
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
