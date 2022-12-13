import { configureChains } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import * as config from 'app/config/env';
import { mainnet, polygon, optimism } from 'wagmi/chains';

const GnosisChain = {
  id: 100,
  name: 'Gnosis Chain',
  network: 'Gnosis',
  nativeCurrency: {
    decimals: 18,
    name: 'xDai',
    symbol: 'xDai',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.ankr.com/gnosis'],
    },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://blockscout.com/xdai/mainnet' },
  },
  iconUrl:
    'https://images.prismic.io/koinly-marketing/16d1deb7-e71f-48a5-9ee7-83eb0f7038e4_Gnosis+Chain+Logo.png',
  testnet: false,
};

export const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, GnosisChain],
  [
    alchemyProvider({ apiKey: config.ALCHEMY_ID }),
    jsonRpcProvider({ rpc: () => ({ http: 'https://rpc.ankr.com/gnosis' }) }),
    publicProvider(),
  ]
);
