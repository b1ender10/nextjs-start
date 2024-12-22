import * as React from "react";
import styles from "./WhyRubSection.module.scss";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const wrapperStyle = {
  paddingBottom: "0px",
}

export const WhyRubSection: React.FC = () => {
  const whyData = useSelector((state: RootState) => state.whyReducer.why);

  return (
    <ContentWrapper customStyles={wrapperStyle} isFirst>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{whyData?.WhyRubSectionTitle}</h2>
            <p className={styles.description}>
              {whyData?.WhyRubSectionDescription}
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            loading="lazy"
            src="/images/why/WhyRubSection.svg"
            className={styles.featureImage}
            alt="RUB-T cryptocurrency features illustration"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

