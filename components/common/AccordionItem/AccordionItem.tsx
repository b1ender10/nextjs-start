import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Icons } from "@/components/common";

interface AccordionProps {
  item: any;
}

export const AccordionItem: React.FC<AccordionProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionBox}>
      <button
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{item?.Question}</span>
        <Icons.ArrowUp fill="Emerald-dark" height={8}  className={styles.dropdownIcon} />
      </button>
      {isOpen && (
        <div className={styles.answer} role="region" aria-label={item.question}>
          {item?.Answer}
        </div>
      )}
    </div>
  );
};
