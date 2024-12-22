import React from "react";
import styles from "./styles.module.scss";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.featureCard}>
      <img loading="lazy" src={icon} alt="" className={styles.featureIcon} />
      <div className={styles.featureContent}>
        <div className={styles.featureTitle}>{title}</div>
        <div className={styles.featureDescription}>{description}</div>
      </div>
    </div>
  );
};
