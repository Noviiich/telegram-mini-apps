import React from "react";
import styles from"./MyButton.module.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "green";
  disabled?: boolean; 
  style?: string;
};

const MyButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  style = "",
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button-${variant}`],
    style,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default MyButton;