import { FC } from "react";

import styles from "./loading.module.scss";

interface LoadingProps {
  className?: string;
  fullSize?: boolean;
}

const Loading: FC<LoadingProps> = ({ className = "", fullSize }) => {
  return (
    <div
      className={`${styles.loaderWrapper} ${
        fullSize ? styles.fullSize : ""
      } ${className}`}
    >
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
