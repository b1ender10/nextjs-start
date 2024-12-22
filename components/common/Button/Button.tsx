import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  className,
  style,
}) => {
  const buttonClass =
    variant === "primary" ? styles.buttonPrimary : variant === "tertiary" ? styles.buttonTertiary : styles.buttonSecondary;

  return (
      <button
        className={`${buttonClass} ${className} ${styles.button}`}
        style={style}
        onClick={onClick}
        type="button"
        tabIndex={0}
        role="button"
      >
        {children}
      </button>
  );
};

