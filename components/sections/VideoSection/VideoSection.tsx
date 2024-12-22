import React from "react";
import styles from "./styles.module.scss";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const VideoSection: React.FC = () => {
  const howData = useSelector((state: RootState) => state.howReducer.how);
  
  return (
    <ContentWrapper>
      <section className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{howData?.VideoSectionTitle}</h1>
        </div>
        <img
          loading="lazy"
          src="/images/how/VideoSection.png"
          className={styles.processImage}
          alt="RUB-T production process visualization"
        />
      </section>
    </ContentWrapper>
  );
};

