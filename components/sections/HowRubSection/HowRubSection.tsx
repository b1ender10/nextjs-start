import React from 'react';
import styles from './styles.module.scss';
import { ContentWrapper } from '@/components/layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { InfoCard } from '@/components/cards';

const wrapperStyles = {
  backgroundColor: "rgba(249, 255, 253, 1)",
}

export const HowRubSection: React.FC = () => {
  const howData = useSelector((state: RootState) => state.howReducer.how);

  return (
    <ContentWrapper customStyles={wrapperStyles} isFirst>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <img
              loading="lazy"
              src="/images/how/HowRubSection.png"
              className={styles.image}
            />
          </div>
          <h2 className={styles.heading}>{howData?.HowRubSectionTitle}</h2>
        </div>
        <div className={styles.content}>
          <InfoCard
            title={howData?.HowRubSectionCard1Title}
            description={howData?.HowRubSectionCard1Description}
            label={howData?.HowRubSectionCard1Label}
          />
          <InfoCard
            title={howData?.HowRubSectionCard2Title}
            description={howData?.HowRubSectionCard2Description}
            label={howData?.HowRubSectionCard2Label}
          />
          <InfoCard
            title={howData?.HowRubSectionCard3Title}
            description={howData?.HowRubSectionCard3Description}
            label={howData?.HowRubSectionCard3Label}
          />
        </div>
      </section>
    </ContentWrapper>
  );
};