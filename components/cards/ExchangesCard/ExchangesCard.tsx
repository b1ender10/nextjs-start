import React from "react";
import styles from "./styles.module.scss";

interface ExchangeData {
  src: string;
  alt: string;
}

const exchangeData: ExchangeData[] = [
  {
    src: "/images/home/supportLogo1.png",
    alt: "Exchange platform 1",
  },
  {
    src: "/images/home/supportLogo2.png",
    alt: "Exchange platform 2",
  },
  {
    src: "/images/home/supportLogo3.png",
    alt: "Exchange platform 3",
  },
  {
    src: "/images/home/supportLogo4.svg",
    alt: "Exchange platform 4",
  },
];



export const ExchangesCard: React.FC = () => {
  return (
    <div className={styles.exchangeGrid}>
        {exchangeData?.map((exchange, index) => (
            <img
              key={index}
              src={exchange.src}
              alt={exchange.alt}
              className={styles.exchangeImage}
            />
        ))}
    </div>
  );
};
