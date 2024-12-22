import React from "react";
import styles from "./Token.module.scss";
import { ContentWrapper } from "@/components/layout";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "@/components/common";

export const HeroHomeSection: React.FC = () => {

  const homeData = useSelector((state: RootState) => state.homeReducer.home);

  return (
    <ContentWrapper>
      <main className={styles.tokenPage}>
        <section className={styles.contentContainer}>
          <div className={styles.headerSection}>
            <div className={styles.titleContainer}>
              <img
                loading="lazy"
                src="/images/main/rubt1.svg"
                className={styles.tokenLogo}
                alt="Token logo"
              />
                <h1 className={styles.tokenTitle}>UB {homeData?.HeroHomeSectionTitle}</h1>
            </div>
            <h2 className={styles.tokenDescription}>{homeData?.HeroHomeSectionDescription}</h2>
              <div className={styles.tokenInfo}>
                <div className={styles.tokenValue}>
                  <img
                    loading="lazy"
                    src={"/images/main/rubt2.svg"}
                    className={styles.tokenIcon}
                    alt="Token currency icon"
                  />
                  <span className={styles.value}>{"1"}</span>
                </div>
                <span className={styles.currency}>{"= 1 ₽"}</span>
              </div>
          </div>
          <div className={styles.actionButtons}>
            <Link href="/claim">
              <Button variant="primary">{homeData?.HeroHomeSectionButton1}</Button>
            </Link>
            <Link href="/how">
              <Button variant="secondary">{homeData?.HeroHomeSectionButton2}</Button>
            </Link>
          </div>
        </section>
        <div className={styles.imageContainer}>
          <img
            loading="lazy"
            src="/images/home/HeroSection.png"
            className={styles.tokenImage}
            alt="Token visualization"
          />
        </div>
      </main>
    </ContentWrapper>
  );
};
