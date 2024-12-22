"use client";
 
import React, { ReactNode } from "react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";
import { config, projectId } from "./config";
 
if (!projectId) throw new Error("Project ID is not defined");
 
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional
});
 
