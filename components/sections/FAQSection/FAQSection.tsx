import React from "react";
import styles from "./styles.module.scss";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AccordionItem } from "@/components/common";

const wrapperStyles = {
  background: "var(--Light-gray, #f5f5f5)"
}

export const FAQSection: React.FC = () => {
  const homeData = useSelector((state: RootState) => state.homeReducer.home);

  return (
    <ContentWrapper customStyles={wrapperStyles}>
      <section className={styles.faqSection} id="faqs">
        <div className={styles.container}>
          <h2 className={styles.title}>{homeData?.FAQSectionTitle}</h2>
          <div className={styles.accordionContainer}>
            {homeData?.FAQSectionFAQs?.map((item: any, index: any) => (
              <AccordionItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};
