import React, { useEffect } from "react";
import { FAQSection, GreenSection } from "@/components/sections";
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
      <GreenSection 
        title={homeData?.GreenSectionFutureTitle}
        description={homeData?.GreenSectionFutureDescription}
      />
      <GreenSection 
        title={homeData?.GreenSectionSupportTitle}
        description={homeData?.GreenSectionSupportDescription}
      >
      </GreenSection>
      <FAQSection />
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
