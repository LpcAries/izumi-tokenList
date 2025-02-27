import { TokenSymbol } from "../symbolList";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

export const tokens: TokenInfo[] = [
    {
        name: 'iZUMi Token',
        symbol: TokenSymbol.IZI,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/izumi.svg',
        chains: [ChainId.Izumi, ChainId.BSCTestnet],
        contracts: {
            [ChainId.Izumi]: {
                address: '0xEe5e3852434eB67F8e9E97015e32845861ea15E8',
                decimal: 18,
            },
            [ChainId.BSCTestnet]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
        },
    },
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdc.png',
        chains: [ChainId.Izumi, ChainId.BSCTestnet],
        contracts: {
            [ChainId.Izumi]: {
                address: '0xe507AAC9eFb2A08F53C7BC73B3B1b8BCf883E41B',
                decimal: 6,
            },
            [ChainId.BSCTestnet]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdt.png',
        chains: [ChainId.Izumi, ChainId.BSCTestnet],
        contracts: {
            [ChainId.Izumi]: {
                address: '0x2d2bA91b026E08e0f23Eb01d7ecAb0e7E279a45f',
                decimal: 6,
            },
            [ChainId.BSCTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 6,
            },
        },
    },
    {
        name: 'DAI',
        chains: [ChainId.Izumi],
        symbol: TokenSymbol.DAI,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/dai.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0xA97f8bc2b98a56f648340e05406cc7E34bB25D3A',
                decimal: 6,
            },
        },
    },
    {
        name: 'Ether',
        symbol: TokenSymbol.ETH,
        chains: [ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/eth.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x3AD23A16A81Cd40010F39309876978F20DD2f682', //Wrapped ETH
                decimal: 18,
            },
        },
    },
    {
        name: 'BNB',
        symbol: TokenSymbol.BNB,
        chains: [ChainId.BSCTestnet],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bnb.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xa9754f0D9055d14EB0D2d196E4C51d8B2Ee6f4d3', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: "BIT Dao",
        symbol: TokenSymbol.BIT,
        chains: [ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bit.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x41BC21bdcF0FA87ae6eeFcBE0e4dB29dB2b650C1',
                decimal: 18,
            },
        },
    },
    {
        name: "Decentralized Eternal Virtual Traveller",
        symbol: TokenSymbol.DEVT,
        chains: [ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/devt.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0xD93FfD9B4d5D643A175B7DcBf4Fb0dA0016D35C7',
                decimal: 18,
            },
        },
    },
    {
        name: "YIN Finance",
        symbol: TokenSymbol.YIN,
        chains: [ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/yin.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x628571078add0031Ff6E9975AE6ddE1123fC423b',
                decimal: 18,
            },
        },
    }
]
