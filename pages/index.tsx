import React, { useEffect } from "react";
import { TokenFeaturesSection, FAQSection, NewsSection, HeroHomeSection, GreenSection, TextWithImage } from "@/components/sections";
import {ExchangesCard} from "@/components/cards"
import { RootState, storeWrapper } from "@/store";
import { fetchAPI, useCloseModal } from "@/lib";
import { setFooter, setHeader, setHome, setNews } from "@/store/homeSlice";
import { useSelector } from "react-redux";
import { useAppKit, useAppKitState } from "@reown/appkit/react";

const LandingPage: React.FC = () => {
  useCloseModal();

  const homeData = useSelector((state: RootState) => state.homeReducer.home);

  return (
    <>
      <HeroHomeSection />
      <GreenSection 
        title={homeData?.GreenSectionFutureTitle}
        description={homeData?.GreenSectionFutureDescription}
      />
      <TextWithImage 
        imageUrl="/images/home/FeatureSection1.png"
        title={homeData?.TextWithImage1Title}
        description={homeData?.TextWithImage1Description}
        buttonText={homeData?.TextWithImage1Button}
      />
      <TextWithImage 
        imageUrl="/images/home/FeatureSection2.png"
        title={homeData?.TextWithImage2Title}
        description={homeData?.TextWithImage2Description}
        buttonText={homeData?.TextWithImage2Button}
        isReverse
      />

      <GreenSection 
        title={homeData?.GreenSectionSupportTitle}
        description={homeData?.GreenSectionSupportDescription}
      >
        <ExchangesCard/>
      </GreenSection>
      
      <TokenFeaturesSection />
      <FAQSection />
      <NewsSection />
    </>
  );
};

export const getStaticProps = storeWrapper.getStaticProps(store => async ({locale}) => {
  const query = {locale: locale, populate: "*"};

  const headerData = await fetchAPI('/header', query);
  store.dispatch(setHeader(headerData?.data));

  // const localesData = await fetchAPI('/i18n/locales');
  // store.dispatch(setLocales(localesData));

  const homeData = await fetchAPI('/home-page', query);
  store.dispatch(setHome(homeData?.data));

  const footerData = await fetchAPI('/footer', query);
  store.dispatch(setFooter(footerData?.data));

  return {
    props: {
    }
  };
});


export default LandingPage;
