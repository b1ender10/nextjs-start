import React from 'react';
import styles from './styles.module.scss';

interface TabProps {
  isActive?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({ isActive, children, onClick }) => (
  <button 
    className={isActive ? styles.tabActive : styles.tab}
    onClick={onClick}
    role="tab"
    aria-selected={isActive}
  >
    {children}
  </button>
);