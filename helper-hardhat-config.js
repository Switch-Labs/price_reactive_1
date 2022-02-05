const networkConfig = {
    default: {
        name: 'hardhat',
    },
    31337: {
        name: 'localhost',
    },
    4: {
        name: 'rinkeby',
        linkToken: '0x01be23585060835e02b77ef475b0cc51aa1e0709',
        ethUsdPriceFeed: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e',
        keyHash: '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311',
        vrfCoordinator: '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B',
        oracle: '0x7AFe1118Ea78C1eae84ca8feE5C65Bc76CcF879e',
        jobId: '6d1bfe27e7034b1d87b5270556b17277',
    },
  }
  
  module.exports = { networkConfig }