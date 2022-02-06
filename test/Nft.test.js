// test/Box.test.js
// Load dependencies
const { expect } = require('chai');
const fs = require('fs')

// Start test block
describe('NFT Unit Tests', async function () {
  let anNFT

  beforeEach(async () => {
      await deployments.fixture()
      const NFT = await deployments.get("Nft")
      anNFT = await ethers.getContractAt("Nft", NFT.address)
  })

  it('should return the correct URI', async () => {
      let expectedURI = fs.readFileSync("./test/data/sword1.svg.txt", "utf8")
      let uri = await anNFT.tokenURI(0)
      console.log(expectedURI)
      console.log("\n vs \n")
      console.log(uri)
      expect(uri == expectedURI).to.be.true
  })
})
