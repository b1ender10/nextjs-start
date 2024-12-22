import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useQuery } from "@apollo/client";
import { GET_YIELD_TABLE } from "@/lib/graphql/queries/queries";
import { YieldsPerPage } from "@/lib";
import { Loader, Pagination, TableHeader, HistoryTableRow } from "@/components/common";

const TabSelector: React.FC = () => {
  const yieldData = useSelector((state: RootState) => state.transparencyReducer.transparency)
  
  return (
    <div className={styles.tabSelector}>
      <button
          className={`${styles.tab} ${true ? styles.activeTab : ""}`}
        >
        {yieldData?.ProfitHistorySectionTitleTab1Title}
      </button>
      <button
          className={`${styles.tab} ${false ? styles.activeTab : ""}`}
        >
        {yieldData?.ProfitHistorySectionTitleTab2Title}
      </button>
      <button
          className={`${styles.tab} ${false ? styles.activeTab : ""}`}
        >
        {yieldData?.ProfitHistorySectionTitleTab2Title}
      </button>
    </div>
  );
};

const wrapperStyles = {
  background: "var(--Light-green, #f9fffd)"
}

export const ProfitHistorySection: React.FC = () => {
  const yieldData = useSelector((state: RootState) => state.transparencyReducer.transparency);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: yieldTable, loading } = useQuery(GET_YIELD_TABLE, {variables: {page: currentPage, pageSize: YieldsPerPage}});

  return (
    <ContentWrapper customStyles={wrapperStyles}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{yieldData?.ProfitHistorySectionTitle}</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.controls}>
            {/* <TabSelector /> */}
            {/* <WalletSelector wallet={wallet} /> */}
          </div>
          
          <div className={styles.table_wrapper}>
            <div className={styles.table}>
              <TableHeader />
              {loading ? (
                <Loader className={styles.table_loader} isVisible isFullPage={false} />
              ) :
              yieldTable?.getAccrualsProfitability?.data?.map((item: any, index: any) => (
                <HistoryTableRow key={index} item={item} />
              ))}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(yieldTable?.getAccrualsProfitability?.totalCount / YieldsPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </ContentWrapper>
  );
};
