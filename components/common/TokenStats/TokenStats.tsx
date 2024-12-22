import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useReadContract } from "wagmi";
import { abiClaim, abiTransfer, ClaimContractAddress, tokensToNumber, tokensToNumberString, TransferContractAddress } from "@/lib";

export interface TokenStatItemProps {
  label: string;
  value: string;
  showNetCirculation?: boolean;
  description?: string;
}

export interface TokenStatsProps {
  stats: TokenStatItemProps[];
}

const TokenStatItem: React.FC<TokenStatItemProps> = ({
  label,
  value,
  showNetCirculation = true,
  description
}) => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.statHeader}>
        <div className={styles.statLabel}>
          <span>{label}</span>
          
        </div>
      </div>
      <div className={styles.statContent}>
        <div className={styles.statValue}>
          <div className={styles.amount}>
            {value}
            <img
              loading="lazy"
              src="/images/main/rubt2.svg"
              className={styles.infoIcon}
              alt=""
            />
          </div>
          {showNetCirculation && (
            <div className={styles.netCirculation}>{description}</div>
          )}
        </div>
      </div>
    </div>
  );
};


export const TokenStats: React.FC = () => {
  const yieldData = useSelector((state: RootState) => state.transparencyReducer.transparency);
  const [tokensCirculation, setTokensCirculation] = React.useState<any>("0");

  const { data: totalSupply} = useReadContract({
    address: TransferContractAddress,
    abi: abiTransfer,
    functionName: 'totalSupply',
  });

  const { data: owner} = useReadContract({
    address: TransferContractAddress,
    abi: abiTransfer,
    functionName: 'getOwner',
  });

  const { data: balance, refetch: refetchBalance} = useReadContract({
    address: TransferContractAddress,
    abi: abiTransfer,
    functionName: 'balanceOf',
    // args: [owner],
    args: ["0xA6D5AdE56f437AcD758d95C65a0dFE8b3057ed57"],
  });

  useEffect(() => {
    refetchBalance().then((balance) => {
      setTokensCirculation(tokensToNumberString(Number(totalSupply) - Number(balance?.data)));
    });
  }, [owner]);

  return (
    <div className={styles.statsWrapper}>
      <div className={styles.header}>
        <div className={styles.title}>{yieldData?.TokenStatsSectionTitle}</div>
        <div className={styles.subtitle}>
          {yieldData?.TokenStatsSectionDescription}
        </div>
      </div>
      <div className={styles.statsContainer}>
        <TokenStatItem label={yieldData?.TokenStatsSectionStat1Label} value={tokensToNumberString(totalSupply)} description={"(Total Supply)"} />
        <TokenStatItem label={yieldData?.TokenStatsSectionStat2Label} value={tokensCirculation} description={"(Net Circulation)"} />
        {/* <TokenStatItem label={yieldData?.TokenStatsSectionStat3Label} value={"119,766,074,110.93"} /> */}
      </div>
    </div>
  );
};
