import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Pagination, TableRow, WalletInfo, TableHeader } from '@/components/common';
import { BalanceSection } from '@/components/sections';
import { Tab } from '@/components/common';

const transactionsHistaory: any[] = [
    {
      date: "03.01.2025",
      status: "success",
      amount: "125523256",
    },
    {
      date: "03.01.2025",
      status: "failed",
      amount: "125523256",
    },
    {
      date: "03.01.2025",
      status: "inProgress",
      amount: "125523256",
    },
  ];

export const ClaimMainSection: React.FC = () => {
    const claimData = useSelector((state: RootState) => state.claimReducer.claim);
    const [activeTab, setActiveTab] = useState('balance');

    return (
        <section className={styles.balanceSection}>
            <div className={styles.balanceCard}>
                <div className={styles.balanceHeader}>
                    <nav className={styles.tabNav} role="tablist">
                        <Tab 
                            isActive={activeTab === 'balance'} 
                            onClick={() => setActiveTab('balance')}
                        >
                            {claimData?.ClaimMainSectionTab1}
                        </Tab>
                        <Tab 
                            isActive={activeTab === 'history'} 
                            onClick={() => setActiveTab('history')}
                        >
                            {claimData?.ClaimMainSectionTab2}
                        </Tab>
                    </nav>
                    <WalletInfo />
                </div>

                {activeTab === 'balance' && <BalanceSection />}
                {activeTab === 'history' && 
                <>
                    <div className={styles.table_wrapper}>
                        <div className={styles.table}>
                        <TableHeader />
                        {transactionsHistaory?.map((item, index) => (
                            <TableRow key={index} {...item} />
                        ))}
                        </div>
                    </div>
                    <Pagination currentPage={1} totalPages={1} onPageChange={()=>{}}/>
                </>}
            </div>
        </section>
    );
};
