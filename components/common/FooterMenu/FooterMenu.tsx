import React from "react";
import styles from "./FooterMenu.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const FooterMenu: React.FC = () => {
  const footerData = useSelector((state: RootState) => state.homeReducer.footer);

  return (
    <nav className={styles.footerMenu}>
      <div className={styles.menuSection}>
        <h3 className={styles.menuTitle}>{footerData.Navigation1Title}</h3>
        <ul className={styles.menuList}>
          {footerData.Navigation1?.map((item: any, itemIndex: any) => (
            <li key={itemIndex}>
              <a href={item.Href} className={styles.menuLink}>
                {item.Text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.menuSection}>
        <h3 className={styles.menuTitle}>{footerData.Navigation2Title}</h3>
        <ul className={styles.menuList}>
          {footerData.Navigation2?.map((item: any, itemIndex: any) => (
            <li key={itemIndex}>
              <a href={item.Href} className={styles.menuLink}>
                {item.Text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.menuSection}>
        <h3 className={styles.menuTitle}>{footerData.Navigation3Title}</h3>
        <ul className={styles.menuList}>
          {footerData.Navigation3?.map((item: any, itemIndex: any) => (
            <li key={itemIndex}>
              <a href={item.Href} className={styles.menuLink}>
                {item.Text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

