import React from "react";
import styles from "./styles.module.scss";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { TokenStats } from "@/components/common";

const wrapperStyles = {
  background: "var(--Light-green, #f9fffd)",
  paddingBottom: "0px",
}

export const TokenStatsSection: React.FC = () => {

  const yieldData = useSelector((state: RootState) => state.transparencyReducer.transparency)

  return (
    <ContentWrapper customStyles={wrapperStyles} isFirst>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.statsSection}>
            <TokenStats />
          </div>
          <div className={styles.infoSection}>
            <h1 className={styles.infoTitle}>{yieldData?.TokenStatsSectionInfoTitle}</h1>
            <p className={styles.infoText}>
              {yieldData?.TokenStatsSectionInfoDescription}
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
