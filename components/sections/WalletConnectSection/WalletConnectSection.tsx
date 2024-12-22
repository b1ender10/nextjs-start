import React from 'react';
import {WalletConnectCard} from "@/components/cards";
import styles from './styles.module.scss';
import { useAppKit } from '@reown/appkit/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const WalletConnectSection: React.FC = () => {

    const claimData = useSelector((state: RootState) => state.claimReducer.claim);
    const { open, close } = useAppKit();

    return (
        <section className={styles.section}>
        <h1 className={styles.title}>{claimData?.WalletConnectSectionTitle}</h1>
        <div className={styles.cardContainer}>
            <WalletConnectCard iconSrc="/images/main/ethereumLogo.svg" walletName={claimData?.WalletConnectCard1Name} button={claimData?.WalletConnectCard1Button} text={claimData?.WalletConnectCard1Text} onConnect={() => open()}  />
            <WalletConnectCard iconSrc="/images/main/tonLogo.svg" walletName={claimData?.WalletConnectCard2Name} button={claimData?.WalletConnectCard2Button} text={claimData?.WalletConnectCard2Text} onConnect={()=>{}}  />
        </div>
        </section>
    );
};
