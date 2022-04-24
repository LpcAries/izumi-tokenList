import { TokenSymbol } from "./symbols/tokenSymbol";
import { ChainId } from "./chainId";

export interface TokenInfo {
  chains: number[];
  name: string;
  symbol: TokenSymbol,
  icon: string;
  contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

export const tokens: TokenInfo[] = [
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
}

]