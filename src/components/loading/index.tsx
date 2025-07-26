import { FC } from "react";

import styles from "./loading.module.scss";

interface LoadingProps {
  className?: string;
}

const Loading: FC<LoadingProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.loaderWrapper} ${className}`}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
