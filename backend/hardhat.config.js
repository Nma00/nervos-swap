require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_API_KEY = 'k-gshmWG-W3hKlqh4QCFQwYPLG-SC_sa';

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const PRIVATE_KEY = '72483587cdfc82a43cd770661f720c5c2e5bcc57324c7bf3749d3d6f78df81b1';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  defaultNetwork: 'godwoken',
  networks: {
     hardhat: {},
     godwoken: {
        url: `https://godwoken-testnet-web3-v1-rpc.ckbapp.dev`,
        accounts: [`${PRIVATE_KEY}`]
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    },
  },
  solidity: {
     compilers: [
        {
           version: '0.5.16',
           settings: {
              optimizer: {
                 enabled: true,
                 runs: 200,
              },
           },
        },
        {
           version: '0.6.6',
           settings: {
              optimizer: {
                 enabled: true,
                 runs: 200,
              },
           },
        },
     ],
  },
  paths: {
     sources: './contracts',
     cache: './cache',
     artifacts: './artifacts',
  },
  mocha: {
     timeout: 300000,
  },
};

