import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "./NavLink";
import { LanguageTab } from "./LanguageTab";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/router";
import { WalletInfo } from "@/components/common";

export const Header: React.FC = () => {
  const router = useRouter();
  const headerData = useSelector((state: RootState) => state?.homeReducer?.header);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {setIsMobileMenuOpen(false)}, [router.pathname]);

  return (
    <>
    <nav className={styles.navigation}>
      <Link href="/">
        <img
          loading="lazy"
          src="/images/main/logo.svg"
          className={styles.logo}
          alt="Company Logo"
        />
      </Link>
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenu_active : ""}`} onClick={() => setIsMobileMenuOpen(prev => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinks_active : ""}`}>
        {headerData?.Navigation?.map((link: any, index: any) => (
          <NavLink key={index} {...link} />
        ))}
      </div>
      <div className={styles.addressLanguageWrapper}>
        <div className={styles.languageTabs}>
          <LanguageTab code={"EN"} locale="en" />
          <LanguageTab code={"RU"} locale="ru-RU"/>
        </div>
        <div className={styles.addressWrapper}>
          <WalletInfo className={styles.amount_wrapper_wallet} type="short" /> 
        </div>
      </div>
      
    </nav>

    <nav className={styles.navigation_bottom}>
        <div className={styles.navigation_bottom_item}>
          <img src="/images/main/trendingUp.svg"/>
          <span>Доходность</span>
        </div>

        <div className={styles.navigation_bottom_item}>
          <img src="/images/main/wallet.svg"/>
          <span>Доход</span>
        </div>

        <div className={styles.navigation_bottom_item}>
          <img src="/images/main/refreshIcon.svg"/>
          <span>Биржа</span>
        </div>
    </nav>
    </>
  );
};
