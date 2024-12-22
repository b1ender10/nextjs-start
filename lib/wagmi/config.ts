import { cookieStorage, createStorage, http, createConfig } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, sepolia } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = "08eeb8847c0cc6e72d1bba3733a82f92"; // process.env.REOWN_KEY

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [sepolia];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config1 = wagmiAdapter.wagmiConfig

export const config = createConfig({
  chains: [sepolia, mainnet],
  ssr: true,
  storage: createStorage({ storage: cookieStorage, }),
  transports: {
    // [sepolia.id]: http(`https://ethereum-sepolia-rpc.publicnode.com`), // !!!
    [sepolia.id]: http(), // !!!
    [mainnet.id]: http(),
  },
});