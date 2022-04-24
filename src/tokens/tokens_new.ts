export{};

const TokenSymbol= require("../symbols/tokenSymbol.ts"); 
const ChainId = require("../chainId.ts");


var tokens = [
  {
    name: "Cardano Token",
    symbol: TokenSymbol.ADA,
    icon: "https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x2942fDF40c191A477886B76070C4a66c59f067fe",
            decimal: 18
        }
    }
},
{
    name: "ALICE",
    symbol: TokenSymbol.ALICE,
    icon: "https://tokens.pancakeswap.finance/images/0xAC51066d7bEC65Dc4589368da368b212745d63E8.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x42c1F97D97BAFA855b660E8BA7f9A645cc956098",
            decimal: 18
        }
    }
}
]
module.exports = tokens;
