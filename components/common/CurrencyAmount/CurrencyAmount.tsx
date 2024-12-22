import React from 'react';
import styles from './styles.module.scss';

interface CurrencyAmountProps {
  amount: string;
  iconSrc: string;
  className?: string;
  size?: string;
}

export const CurrencyAmount: React.FC<CurrencyAmountProps> = ({ 
  amount, 
  iconSrc, 
  className = '',
  size = 'big'
}) => {

  const convertSizeToStyle = (size: string) => {
    switch (size) {
      case 'big':
        return styles.amountWrapper_big;
      case 'small':
        return styles.amountWrapper_small;
      default:
        return styles.amountWrapper_big;
    }
  }

  return (
    <div className={`${styles.amountWrapper} ${className} ${convertSizeToStyle(size)}`}>
      <span className={`${styles.amount} `}>{amount}</span>
      <div className={styles.currencyIcon}>
        <img loading="lazy" src={iconSrc} alt="" className={styles.icon} />
      </div>
    </div>
  )
};