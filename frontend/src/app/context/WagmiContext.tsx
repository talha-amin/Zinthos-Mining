"use client"


import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { avalanche, goerli, mainnet, optimism ,polygonMumbai} from 'wagmi/chains'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { SafeConnector } from 'wagmi/connectors/safe'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [
    // alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    alchemyProvider({ apiKey: "SQJNaaxbCt0gWB9xXbeDxshDKj2NOqth" }),
    publicProvider(),
  ],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        UNSTABLE_shimOnConnectSelectAccount: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: (detectedName) =>
          `Injected (${
            typeof detectedName === 'string'
              ? detectedName
              : detectedName.join(', ')
          })`,
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

type nodeProps = {
  children : React.ReactNode;
}

export const WagmiContextProvider = ({ children }:nodeProps) => {
  


  return (
    <WagmiConfig config={config}>
      {children}
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