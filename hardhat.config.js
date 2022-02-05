require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  defaultNetwork: "hardhat", 
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: "0.8.11"
      },
      {
        version: "0.7.0"
      }
    ]
  },
  namedAccounts: {
    deployer: {
        default: 0, 
    }
  }
};