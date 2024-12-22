import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  Text: string;
  Href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ Text, Href }) => {
  const router = useRouter();

  return (
    <Link href={Href} className={`${styles.navLink} ${router.pathname == Href ? styles.navLink_active : ""}`}>
      {Text}
    </Link>
  )
};
