import React from "react";
import styles from "./SecuredAssetCard.module.scss";
interface SecuredAssetCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const SecuredAssetCard: React.FC<SecuredAssetCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <img
        loading="lazy"
        src={imageSrc}
        alt="Secured asset visualization"
        className={styles.assetImage}
      />
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
