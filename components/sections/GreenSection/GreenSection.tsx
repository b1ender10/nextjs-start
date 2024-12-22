import React, { useMemo } from "react";
import { ContentWrapper } from "@/components/layout";
import styles from "./styles.module.scss";

interface GreenSectionProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    theme?: "light" | "bright";
}

export const GreenSection: React.FC<GreenSectionProps> = ({title, description, children, theme = "light"}) => {
  const customStyles = useMemo(() => ({ backgroundColor: theme === "light" ? "rgba(249, 255, 253, 1)" : "var(--Emerald-40, rgba(179, 223, 187, 0.4)" }), [theme]);
   
  return (
    <ContentWrapper customStyles={customStyles}>
        <section className={`${styles.greenSection}`} role="banner">
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                {children}
            </div>
        </section>
    </ContentWrapper>
  );
};
