import React from 'react';
import styles from './WalletConnectCard.module.scss';

interface WalletConnectCardProps {
  iconSrc: string;
  walletName: string;
  button: string;
  text: string;
  onConnect?: () => void;
}

export const WalletConnectCard: React.FC<WalletConnectCardProps> = ({ iconSrc, walletName, button, text, onConnect }) => {
  return (
    <section className={styles.card}>
      <div className={styles.content}>
        <header className={styles.header}>
          <img src={iconSrc} className={styles.icon} />
          <h2 className={styles.walletName}>{walletName}</h2>
        </header>
        <button className={styles.connectButton} onClick={onConnect}>{button}</button>
        <p className={styles.description}>{text}</p>
      </div>
    </section>
  );
};
