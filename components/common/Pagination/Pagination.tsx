import React from "react";
import styles from "./styles.module.scss";
import { Icons } from "@/components/common";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className={styles.pagination}>

      <button
        className={`${styles.pageButton} ${styles.pageButton_arrow} ${styles.pageButton_arrow_double} ${currentPage > 3 ? styles.pageButton_active : ""}`}
        onClick={() => currentPage > 3 && onPageChange(currentPage - 1)}
      >
        <Icons.ArrowUp fill="Emerald-dark" height={7} width={14} className={styles.pageButton_prev} />
        <Icons.ArrowUp fill="Emerald-dark" height={7} width={14} className={styles.pageButton_prev} />
      </button>

      <button
        className={`${styles.pageButton} ${styles.pageButton_arrow} ${currentPage > 1 ? styles.pageButton_active : ""}`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        <Icons.ArrowUp fill="Emerald-dark" height={7} width={14} className={styles.pageButton_prev} />
      </button>
     
      {Array.from({ length: totalPages }, (_, i) => i + 1)?.map((page) => {
        if (totalPages > 5) {
          if (
            page === currentPage ||
            (currentPage >= currentPage - 3 && currentPage <= currentPage + 3 && Math.abs(currentPage - page) <= 2)
          ) {
            return (
              <button
                key={page}
                className={`${styles.pageButton} ${
                  currentPage === page ? styles.activePage : ""
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            );
          } else if (
            (page === currentPage - 1 && currentPage > 3) ||
            (page === currentPage + 1 && currentPage < totalPages - 2)
          ) {
            return (
              <span key={page} className={styles.ellipsis}>
                ...
              </span>
            );
          }
        } else {
          return (
            <button
              key={page}
              className={`${styles.pageButton} ${
                currentPage === page ? styles.activePage : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        }
      })}
      <button
        className={`${styles.pageButton} ${styles.pageButton_arrow} ${currentPage < totalPages ? styles.pageButton_active : ""}`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        <Icons.ArrowUp fill="Emerald-dark" height={7} width={14} className={styles.pageButton_next} />
      </button>
    
      <button
        className={`${styles.pageButton} ${styles.pageButton_arrow} ${currentPage < totalPages - 2 ? styles.pageButton_active : ""}`}
        onClick={() => currentPage < totalPages - 2 && onPageChange(totalPages)}
      >
        <Icons.ArrowUp fill="Emerald-dark" height={7} width={14} className={styles.pageButton_next} />
        <Icons.ArrowUp fill="Emerald-dark" height={7} width={14} className={styles.pageButton_next} />
      </button>
    </div>
  );
};
