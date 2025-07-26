import { FC } from "react";

import styles from "./error.module.scss";

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return <div className={styles.errorWrapper}>{message}</div>;
};

export default Error;
