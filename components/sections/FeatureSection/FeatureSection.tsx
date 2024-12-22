import { ContentWrapper } from '@/components/layout';
import styles from './styles.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { FeatureCard } from '@/components/cards';

export const FeatureSection: React.FC = () => {

    const whyData = useSelector((state: RootState) => state.whyReducer.why);

    return (
      <ContentWrapper>
          <div className={styles.container}>
              <div className={styles.heading}>
                {whyData?.FeatureSectionTitle}
              </div>
              <div className={styles.featuresContainer}>
                  <FeatureCard icon="/images/why/FeatureSection1.png" title={whyData?.FeatureSectionCard1Title} description={whyData?.FeatureSectionCard1Description}/>
                  <FeatureCard icon="/images/why/FeatureSection2.png" title={whyData?.FeatureSectionCard2Text} description={whyData?.FeatureSectionCard2Description}/>
                  <FeatureCard icon="/images/why/FeatureSection3.png" title={whyData?.FeatureSectionCard3Text} description={whyData?.FeatureSectionCard3Description}/>
                  <FeatureCard icon="/images/why/FeatureSection4.png" title={whyData?.FeatureSectionCard4Text} description={whyData?.FeatureSectionCard4Description}/>
                  <FeatureCard icon="/images/why/FeatureSection5.png" title={whyData?.FeatureSectionCard5Text} description={whyData?.FeatureSectionCard5Description}/>
              </div>
          </div>
        </ContentWrapper>
    );
}