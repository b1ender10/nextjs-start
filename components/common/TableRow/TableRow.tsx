import React from 'react';
import styles from './TableRow.module.scss';
import { Icons } from '../Icons/Icons';

interface TableRowProps {
  date: string;
  amount: string;
  status: 'inProgress' | 'failed' | 'success';
}

export const TableRow: React.FC<TableRowProps> = ({ date, amount, status }) => {
  const getStatusDetails = (status: string) => {
    switch (status) {
      case 'inProgress':
        return { text: 'In progress', icon: '/images/main/inProgress.svg', className: styles.inProgress };
      case 'failed':
        return { text: 'Failed', icon: '/images/main/failed.svg', className: styles.failed };
      case 'success':
        return { text: 'Success', icon: '/images/main/success.svg', className: styles.success };
      default:
        return { text: 'Unknown', icon: '', className: '' };
    }
  };

  const { text, icon, className } = getStatusDetails(status);

  return (
    <div className={styles.tableRow}>
      <time className={styles.date}>{date}</time>
      <div className={styles.amount}>
        <span>{amount}</span>
        <Icons.Currency className={styles.currencyIcon} />
      </div>
      <button className={`${styles.statusButton} ${className}`}>
        <img src={icon} alt="" className={styles.statusIcon} />
        <span>{text}</span>
      </button>
    </div>
  );
};
