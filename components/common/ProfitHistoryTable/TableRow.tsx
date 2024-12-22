import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface TableRowProps {
  item: any;
}

export const TableRow: React.FC<TableRowProps> = ({ item }) => {
  const yieldData = useSelector((state: RootState) => state.transparencyReducer.transparency);
  
  return (
    <div className={styles.tableRow}>
      <div className={styles.dateCell}>{new Date(item.date).toLocaleString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}</div>
      <div className={styles.creditedCell}>
        <div className={styles.valueWrapper}>
          <div className={styles.value}>{item.total_accrued.toLocaleString()}</div>
          <img
            loading="lazy"
            src="/images/main/rubt2.svg"
            className={styles.currencyIcon}
            alt=""
          />
        </div>
      </div>
      <div className={styles.profitabilityCell}>
        <div className={styles.value}>{item.profitability.toFixed(2)}%</div>
      </div>
      <div className={styles.issuedCell}>
        <div className={styles.valueWrapper}>
          <div className={styles.value}>
            {item.total_issued.toLocaleString()}
          </div>
          <img
            loading="lazy"
            src="/images/main/rubt2.svg"
            className={styles.currencyIcon}
            alt=""
          />
        </div>
      </div>
      {/* <button className={styles.downloadButton}>
        <img
          loading="lazy"
          src="/images/main/download.svg"
          className={styles.downloadIcon}
          alt=""
        />
        <span className={styles.downloadText}>{yieldData?.ProfitHistorySectionTableDownload}</span>
      </button> */}
    </div>
  );
};
