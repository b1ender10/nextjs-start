'use client'

import { wagmiAdapter, projectId, config } from '@/lib/wagmi/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { AppKitNetwork, sepolia } from '@reown/appkit/networks'
import React, { useEffect, type ReactNode } from 'react'
import { cookieToInitialState, State, useAccount, WagmiConfig, WagmiProvider, type Config } from 'wagmi'
import { createWeb3Modal } from '@web3modal/wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'appkit-example',
  description: 'AppKit Example',
  url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

export const networks = [sepolia] as [AppKitNetwork, ...AppKitNetwork[]];

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: networks,
  defaultNetwork: sepolia,
  metadata: metadata,
  allowUnsupportedChain: true,
  features: {
    email: false,
    socials: false,
    emailShowWallets: false,
    analytics: false,
    swaps: false,
    onramp: false,
  }
})

// createWeb3Modal({
//   wagmiConfig: config,
//   projectId,
//   enableAnalytics: true, // Optional
// });

export function Web3ModalProvider({
  children,
  cookie,
}: {
  children: ReactNode;
  cookie?: string | null;
}) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookie);
  return (
  <WagmiProvider
    config={wagmiAdapter.wagmiConfig as Config} // error server and client mismatch
    // config={config as Config}
    initialState={initialState}
    // reconnectOnMount={false} // do not use!
  >
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiProvider>
  )
}
