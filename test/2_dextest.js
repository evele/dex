// The user must have ETH deposited such that deposited eth >= buy order value
// The user must hacve enough tokens deposited such that token balance >= sell order amount
// The BUY order book should be ordered on price from highes to lowest starting at index 0

const Dex = artifacts.require("Dex")
const Link = artifacts.require("Link")
const truffleAssert = require("truffle-assertions")

contract("Dex", (accounts) => {
    it("should have enough ETH", async () => {
      let dex = await Dex.deployed()
      let link = await Link.deployed()
      let balance = await web3.eth.getBalance(accounts[0])
      const halfBalance = balance / 10;
      await truffleAssert.reverts(dex.createLimitOrder(0,web3.utils.fromUtf8("LINK"),balance, 2))
      await truffleAssert.passes(dex.createLimitOrder(0,web3.utils.fromUtf8("LINK"),halfBalance, 1))
        
    })
})