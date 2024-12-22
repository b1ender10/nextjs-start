import React from "react";
import styles from "./TokenFeatureCard.module.scss";
import { Button, Icons } from "@/components/common";

interface TokenFeatureCardProps {
  icon: string;
  title: string;
  description: string;
  onLearnMore?: () => void;
  button?: string
}

export const TokenFeatureCard: React.FC<TokenFeatureCardProps> = ({
  icon,
  title,
  description,
  onLearnMore,
  button
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <img loading="lazy" src={icon} alt="" className={styles.icon} />
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      {/* <Button 
        variant="secondary"
        className={styles.learnMore}
        onClick={onLearnMore}
      >
        <span>{button}</span>
        <Icons.ArrowRight className={styles.arrowIcon} />
      </Button> */}
    </div>
  );
};
