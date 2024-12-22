// src/components/ContentWrapper.tsx
import React from "react";
import styles from "./ContentWrapper.module.scss";

interface ContentWrapperProps {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  imageBg?: string;
  imageBgStyles?: React.CSSProperties;
  isFirst?: boolean;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, customStyles, imageBg, imageBgStyles, isFirst = false }) => {
  return (
    <div className={`${styles.contentWrapper} ${isFirst ? styles.contentWrapper_first : ""}`} style={customStyles}>
      <div className={styles.content}>
        {children}
      </div>
      <img src={imageBg} style={imageBgStyles} />
    </div>
  );
};
