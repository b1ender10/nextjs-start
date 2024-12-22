import React from "react";
import styles from "./TokenFeatures.module.scss";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "@/components/common";
import { TokenFeatureCard } from "@/components/cards";
import Link from "next/link";

export const TokenFeaturesSection: React.FC = () => {

  const homeData = useSelector((state: RootState) => state.homeReducer.home);

  return (
    <ContentWrapper>
      <section className={styles.container}>
        <h2 className={styles.heading}>
          {homeData?.TokenFeaturesSectionTitle}
        </h2>
        <div className={styles.cardsContainer}>
            <TokenFeatureCard
              icon={"/images/home/TokenUsage1.png"}
              title={homeData?.TokenFeaturesSectionCard1Title}
              description={homeData?.TokenFeaturesSectionCard1Description}
              button={homeData?.TokenFeaturesSectionCard1Button}
            />
            <TokenFeatureCard
              icon={"/images/home/TokenUsage2.png"}
              title={homeData?.TokenFeaturesSectionCard2Title}
              description={homeData?.TokenFeaturesSectionCard2Description}
              button={homeData?.TokenFeaturesSectionCard2Button}
            />
            <TokenFeatureCard
              icon={"/images/home/TokenUsage3.png"}
              title={homeData?.TokenFeaturesSectionCard3Title}
              description={homeData?.TokenFeaturesSectionCard3Description}
              button={homeData?.TokenFeaturesSectionCard3Button}
            />
        </div>
        <Link href="/#faqs">
          <Button className={styles.faqButton} variant="secondary">{homeData?.TokenFeaturesSectionButton}</Button>
        </Link>
      </section>
    </ContentWrapper>
  );
};
