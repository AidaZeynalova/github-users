import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./result-line.module.scss";

interface ResultLineProps {
  icon: string;
  name: string;
  to: string;
}

const ResultLine: FC<ResultLineProps> = ({ icon, name, to }) => {
  return (
    <li className={styles.resultLineWrapper}>
      <Link to={to}>
        <div>{icon && <img src={icon} alt="" />}</div>
        <div className={styles.name}>{name}</div>
      </Link>
    </li>
  );
};

export default ResultLine;
