import React from "react";
import styles from "./Footer.module.scss";
import { MenuItem } from "./MenuItem";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const wrapperStyles = {
  background: "var(--Black, #232323)"
}

export const Footer: React.FC = () => {
  const footerData = useSelector((state: RootState) => state?.homeReducer?.footer);

  return (
    <ContentWrapper customStyles={wrapperStyles}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <Link href="/">
                <img
                  loading="lazy"
                  src={"/images/main/logo.svg"}
                  className={styles.logo}
                  alt="Company logo"
                />
              </Link>
            </div>
            <p className={styles.description}>{footerData?.Title}</p>
          </div>
          <nav className={styles.navigation} role="navigation">
            <MenuItem title={footerData?.FooterMenu1Title} links={footerData?.FooterMenu1Navigation} />
            <MenuItem title={footerData?.FooterMenu2Title} links={footerData?.FooterMenu2Navigation} />
            <MenuItem title={footerData?.FooterMenu3Title} links={footerData?.FooterMenu3Navigation} />
          </nav>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.copyrightText}>
            {footerData?.FooterCopyright}
          </div>
          {/* <img
            loading="lazy"
            src={"/images/main/socials.png"}
            className={styles.socials}
            alt="Accepted payment methods"
          /> */}
        </div>
      </footer>
    </ContentWrapper>
  );
};

