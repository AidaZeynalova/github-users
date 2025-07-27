import { FC, ReactNode, memo } from "react";
import { Link } from "react-router-dom";

import styles from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  background?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  to,
  background = "primary",
}) => {
  if (to) {
    return (
      <Link className={`${styles.button} ${styles[background]}`} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.button} ${styles[background]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
