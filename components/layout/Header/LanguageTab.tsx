import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
interface LanguageTabProps {
  code: string;
  locale?: string;
}

export const LanguageTab: React.FC<LanguageTabProps> = ({ code, locale }) => {

  const router = useRouter();
  
  return (
    <Link href={router.pathname} locale={locale} legacyBehavior >
      <div className={`${styles.languageTab} ${router.locale == locale ? styles.languageTabActive : ""}`}>{code}</div>
    </Link>
  )
};
