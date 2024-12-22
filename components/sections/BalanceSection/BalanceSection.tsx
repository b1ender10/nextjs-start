import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { RootState } from '@/store';
import React, { useEffect, useState } from 'react';
import { useAccount, useContractWrite, useReadContract, useSendTransaction, useSignMessage, useWriteContract } from 'wagmi';
import { abiClaim, abiTransfer, ClaimContractAddress, formValidationMessages, Locales, tokensToNumber, tokensToNumberString, TransferContractAddress } from '@/lib';
import toast from 'react-hot-toast';
import { Loader, CurrencyAmount } from '@/components/common';
import { useRouter } from 'next/router';

export const BalanceSection = () => {
    const claimData = useSelector((state: RootState) => state.claimReducer.claim);

    const { address } = useAccount();
    const { signMessage } = useSignMessage();
    const { writeContract, isPending } = useWriteContract();

    const { data: balanceContract, refetch: refetchBalance, isLoading: isLoadingBalanceContract, isRefetching} = useReadContract({
        address: TransferContractAddress,
        abi: abiTransfer,
        functionName: 'balanceOf',
        // args: [owner],
        args: [TransferContractAddress],
        query: {refetchInterval: 10000}, // not work?
        
    });

    const { data: summ1, refetch: refetchSumm1, isLoading: isLoadingSumm1 } = useReadContract({
        address: TransferContractAddress,
        abi: abiTransfer,
        functionName: 'getPackedIndexesRewards',
        args: [address],
        query: {refetchInterval: 10000}
    });

    const { data: summ2, refetch: refetchSumm2, isLoading: isLoadingSumm2 } = useReadContract({
        address: TransferContractAddress,
        abi: abiTransfer,
        functionName: 'getAccumulatedReward',
        args: [address],
        query: {refetchInterval: 10000}
    });

    const router = useRouter();
    const tempClaim = async () => {
        try {
            const res = await writeContract({ 
                address: TransferContractAddress,
                abi: abiTransfer,
                functionName: 'claimRewards',
                // args: [address],    
             });
        } catch (error) {
            // Handle error
            console.error(error);
            toast.error(router.locale == Locales.RU ? formValidationMessages.somethingWrongError.valueRu : formValidationMessages.somethingWrongError.value);
        }
    };

    const totalClaim = BigInt((summ1 as any)?.[1] ?? 0) + BigInt((summ2 as any) ?? 0);

    return (
        <div className={styles.balanceInfo}>
                {isLoadingBalanceContract || isLoadingSumm1 || isLoadingSumm2  ? 
                <Loader className={styles.balanceInfo_loader} isVisible={true}  isFullPage={false}/> :
                (balanceContract as any) > totalClaim ? 
                <>
                    <h2 className={styles.balanceTitle}>{claimData?.ClaimMainSectionTitle}</h2>
                    <div className={styles.balanceContent}>
                        <div className={styles.mainBalance}>
                            <CurrencyAmount 
                                amount={tokensToNumberString(totalClaim)}
                                iconSrc="/images/main/rubt2.svg"
                            />
                            {isPending ? 
                            <Loader isVisible={true}  isFullPage={false}/> : 
                             <button className={styles.withdrawButton} onClick={tempClaim}>
                                {claimData?.ClaimMainSectionWithdrawButton}
                            </button>
                            }
                           
                        </div>
                        
                        <div className={styles.percentageInfo}>
                            <span className={styles.percentage}>
                            +{"16"}%
                            </span>
                            <span className={styles.percentageLabel}>
                                {claimData?.ClaimMainSectionYearPercent} %
                            </span>
                        </div>
                    </div>
                    
                    <div className={styles.transactionInfo}>
                        <div className={styles.transactionItem}>
                            <span className={styles.transactionLabel}>
                                {claimData?.ClaimMainSectionLastTransaction}
                            </span>
                            <CurrencyAmount 
                                amount={"211 210.93"}
                                iconSrc={"/images/main/rubt2.svg"}
                                size='small'
                                className={styles.transactionAmount}
                            />
                        </div>
                        
                        <div className={styles.transactionItem}>
                            <span className={styles.transactionLabel}>
                                {claimData?.ClaimMainSectionTotalYield}
                            </span>
                            <CurrencyAmount 
                                amount={"99 975.21"}
                                iconSrc={"/images/main/rubt2.svg"}
                                size='small'
                                className={styles.transactionAmount}
                            />
                        </div>
                    </div>
                </> : 
                <>
                    {claimData?.InsufficientFunds}
                </>}
                
            </div>
    )
}