import React from "react";
import styles from "./styles.module.scss";
import { ContentWrapper } from "@/components/layout";
import { Button } from "@/components/common";

interface TextWithImageProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText?: string;
  isReverse?: boolean
}

export const TextWithImage: React.FC<TextWithImageProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
  isReverse = false,
}) => {
  return (
    <ContentWrapper>
      <section className={styles.container}>
        <div className={`${styles.content} ${isReverse ? styles.content_reverse : ""}`}>
          <div className={styles.imageWrapper}>
            <img
              loading="lazy"
              src={imageUrl}
              className={styles.image}
              alt="Transparency and security illustration"
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            
            {buttonText &&
              <Button className={styles.actionButton} variant="secondary">
                {buttonText}
              </Button>
            }
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};
