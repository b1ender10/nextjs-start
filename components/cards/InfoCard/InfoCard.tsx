import React from 'react';
import styles from './styles.module.scss';

interface InfoCardProps {
    title: string;
    description: string;
    label?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description, label }) => {
  return (
    <div className={styles.card}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};