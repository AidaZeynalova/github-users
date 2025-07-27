import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./user-item.module.scss";

interface UserItemProps {
  icon: string;
  name: string;
  to: string;
}

const UserItem: FC<UserItemProps> = ({ icon, name, to }) => {
  return (
    <li className={styles.userItem}>
      <Link to={to}>
        <div>{icon && <img src={icon} alt={name} />}</div>
        <div className={styles.name}>{name}</div>
      </Link>
    </li>
  );
};

export default UserItem;
