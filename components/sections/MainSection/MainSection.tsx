import React, { useMemo } from "react";
import { ContentWrapper } from "@/components/layout";
import styles from "./styles.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface MainSectionProps {
    theme?: "light" | "bright";
}

export const MainSection: React.FC<MainSectionProps> = ({theme = "light"}) => {
    const homeData = useSelector((state: RootState) => state.homeReducer.home);
    const customStyles = useMemo(() => ({ backgroundColor: theme === "light" ? "rgba(249, 255, 253, 1)" : "var(--Emerald-40, rgba(179, 223, 187, 0.4)" }), [theme]);
   
    return (
        <ContentWrapper customStyles={customStyles}>
            <section className={`${styles.greenSection}`} role="banner">
                {homeData?.FAQSectionTitle}
            </section>
        </ContentWrapper>
    );
};
