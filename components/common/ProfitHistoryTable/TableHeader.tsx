import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const TableHeader: React.FC = () => {
  const yieldData = useSelector((state: RootState) => state.transparencyReducer.transparency)
  
  return (
    <div className={styles.tableHeader}>
      <div className={styles.dateHeader}>{yieldData?.ProfitHistorySectionTableHeaderDate}</div>
      <div className={styles.creditedHeader}>{yieldData?.ProfitHistorySectionTableHeaderCredited}</div>
      <div className={styles.profitabilityHeader}>{yieldData?.ProfitHistorySectionTableHeaderProfibility}</div>
      <div className={styles.issuedHeader}>{yieldData?.ProfitHistorySectionTableHeaderIssued}</div>
      {/* <div className={styles.downloadHeader}>{yieldData?.ProfitHistorySectionTableHeaderDownload}</div> */}
    </div>
  );
};
