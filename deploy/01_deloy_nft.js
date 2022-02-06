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

    if (networkName == "localhost") {
        log("Let's create an NFT now!")

        const MyNFTContract = await ethers.getContractFactory("Nft")
        const accounts = await ethers.getSigners()
        const signer = accounts[0]
        const anNFT = new ethers.Contract(NFT.address, MyNFTContract.interface, signer) // Q: what does this do? new ethers.Contract(

        tx = await anNFT.create()
        log(`You can view the tokenURI here ${await anNFT.tokenURI(0)}`)
    }    

}