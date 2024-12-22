import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  links: any[];
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, links }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuTitle}>{title}</div>
      <div className={styles.menuLinks}>
        {links?.map((link, index) => (
          <Link href={link?.Href} key={index} className={styles.menuLink}>
            {link?.Text}
          </Link>
        ))}
      </div>
    </div>
  );
};
