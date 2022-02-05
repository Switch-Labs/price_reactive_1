let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, get, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()
    const networkName = networkConfig[chainId]['name']
    let linkTokenAddress
    let vrfCoordinatorAddress

    if (networkName == "localhost") {
        let EthUsdAggregatorMock = await get("EthUsdAggregatorMock")
        aggregatorAddress = EthUsdAggregatorMock.address
    }

    if (networkName == "rinkeby") {
        log("--------------------RINKEBY DETECTED------------------------------")
        aggregatorAddress = networkConfig[chainId]['ethUsdPriceFeed']
    }

    const NFT = await deploy('Nft', {
        from: deployer,
        args: [aggregatorAddress],
        log: true
    })

    log(`Depolyed NFT contract to ${NFT.address}`)
    log(`Verify with:\n npx hardhat verify --network ${networkName} ${NFT.address}`)


}