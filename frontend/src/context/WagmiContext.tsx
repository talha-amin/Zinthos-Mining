"use client"
import '@rainbow-me/rainbowkit/styles.css';


import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { avalanche, goerli, mainnet, optimism ,sepolia} from 'wagmi/chains'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { SafeConnector } from 'wagmi/connectors/safe'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [
    // alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    alchemyProvider({ apiKey: "X_3R-3s7E9tP8Xpr2USSlc10LZaZYtUK" }),
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Fennec Dapp',
  projectId: '98b8a573411863fb017b4448f7e287f1',
  chains
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

type nodeProps = {
  children : React.ReactNode;
}

export const WagmiContextProvider = ({ children }:nodeProps) => {
  


  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
      accentColor: '#00ffff',
      accentColorForeground: 'black',
      borderRadius: 'large',
      fontStack: 'system',
      overlayBlur: 'small',
      
    })}>

      {children}
      </RainbowKitProvider>
      </WagmiConfig>
  );
};

//!old ==================================
// "use client"
// import { WagmiConfig, createConfig, configureChains, mainnet,sepolia,goerli } from 'wagmi'
// import { publicProvider } from 'wagmi/providers/public'
 
// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [sepolia,goerli,mainnet],
//   [publicProvider()],
// )

// const config = createConfig({
//   chains,
//   autoConnect: true,
//   publicClient,
//   webSocketPublicClient,
// })  

// type nodeProps = {
//   children : React.ReactNode;
// }

// export const WagmiContextProvider = ({ children }:nodeProps) => {
  


//   return (
//     <WagmiConfig config={config}>
//       {children}
//       </WagmiConfig>
//   );
// };