import { FC, ReactNode, InputHTMLAttributes, memo } from "react";

import styles from "./input.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  icon?: ReactNode;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
  className = "",
  icon,
  placeholder,
  ...props
}) => {
  return (
    <label className={`${styles.label} ${className}`}>
      <div>{icon}</div>
      <input placeholder={placeholder} {...props} />
    </label>
  );
};

export default memo(Input);
