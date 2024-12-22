import React from "react";
import styles from "./NewsSection.module.scss";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "@/components/common";
import { NewsCard } from "@/components/cards";
import Link from "next/link";

export const NewsSection: React.FC = () => {

  const homeData = useSelector((state: RootState) => state.homeReducer.home);

  return (
    <ContentWrapper>
      <section className={styles.section} id="news">
        <header className={styles.header}>
          <h2>{homeData?.NewsSectionTitle}</h2>
        </header>
        <div className={styles.content}>
          {homeData?.NewsSectionNews?.map((item: any) => (
            <NewsCard key={item.id} item={item} button={homeData?.NewsSectionLearn} />
          ))}
        </div>
        <Link href="/#news">
          <Button variant="secondary" className={styles.readAll} onClick={() => {}}>{homeData?.NewsSectionButton}</Button>
        </Link>
      </section>
    </ContentWrapper>
  );
};
