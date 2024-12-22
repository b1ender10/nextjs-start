import React from "react";
import styles from "./styles.module.scss";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { SecuredAssetCard } from "@/components/cards";

const wrapperStyles = {
  paddingBottom: "0px",
}

export const SecuredAssetsSection: React.FC = () => {

  const bridgeData = useSelector((state: RootState) => state.bridgeReducer.bridge);

  return (
    <ContentWrapper customStyles={wrapperStyles} isFirst>
      <div className={styles.pageContainer}>
        <SecuredAssetCard
          imageSrc="/images/bridge/HeroSection.png"
          title={bridgeData?.SecuredAssetsSectionTitle}
          description={bridgeData?.SecuredAssetsSectionDescription}
        />
      </div>
    </ContentWrapper>
  );
};
