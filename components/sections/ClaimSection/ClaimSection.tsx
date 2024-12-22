import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ContentWrapper } from '@/components/layout';
import { ClaimMainSection, WalletConnectSection } from '@/components/sections';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { parseStrapiText } from '@/lib/parseStrapiText';
import { Icons } from '@/components/common';
import { useAccount } from 'wagmi';
import { useAppKit, useAppKitAccount, useAppKitEvents, useAppKitNetwork, useAppKitState } from '@reown/appkit/react';
import { AppKitNetwork, sepolia } from '@reown/appkit/networks';

const wrapperStyles = {
  background: "var(--Light-green, #f9fffd)",
}

export const ClaimSection: React.FC = () => {
  const { isConnected } = useAccount();
  const { isConnected: isConnectedReown } = useAppKitAccount();
  const claimData = useSelector((state: RootState) => state.claimReducer.claim);
  const { open, close } = useAppKit();
  const { caipNetwork, caipNetworkId, chainId, switchNetwork } = useAppKitNetwork();

  return (
    <ContentWrapper customStyles={wrapperStyles} isFirst>
      <main className={styles.incomeContainer}>
        <h1 className={styles.title}>{claimData?.ClaimSectionTitle}</h1>

        <p className={styles.subtitle}>{(isConnected && isConnectedReown) && claimData?.ClaimSectionText}</p>

        {(!isConnectedReown) && <WalletConnectSection />}
        {(isConnectedReown) && <ClaimMainSection />}
        
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <span className={styles.footerText}>
              {parseStrapiText(claimData?.ClaimSectionFooter)}
            </span>
            <Icons.Alert />
          </div>
        </footer>
      </main>
    </ContentWrapper>
  );
};