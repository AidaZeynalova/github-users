import { FC } from "react";
import { Link } from "react-router-dom";

import Loading from "../loading";
import Error from "../error";

import styles from "./result-line.module.scss";

interface ResultLineProps {
  icon: string;
  name: string;
  to: string;
  isLoading: boolean;
  isError: boolean;
}

const ResultLine: FC<ResultLineProps> = ({
  icon,
  name,
  isLoading,
  isError,
  to,
}) => {
  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error
        message="
user not found"
      />
    );

  return (
    <Link to={to} className={styles.resultLineWrapper}>
      <div>{icon && <img src={icon} alt="" />}</div>
      <div>{name}</div>
    </Link>
  );
};

export default ResultLine;
