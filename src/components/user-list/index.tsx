import { FC, memo } from "react";

import UserItem from "@/components/user-item";
import Loading from "@/components/ui/loading";
import Error from "@/components/ui/error";

import styles from "./user-list.module.scss";

interface UserProps {
  login: string;
  avatar_url: string;
}
interface UserListProps {
  userList: UserProps[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const UserList: FC<UserListProps> = ({
  userList,
  isLoading,
  isError,
  errorMessage,
}) => {
  if (isLoading) return <Loading className={styles.loader} />;
  if (isError) return <Error message={errorMessage} />;

  return (
    <ul className={styles.listWrapper}>
      {userList.map((item) => {
        return (
          <UserItem
            key={item.login}
            to={`/${item.login}`}
            icon={item.avatar_url}
            name={item.login}
          />
        );
      })}
    </ul>
  );
};

export default memo(UserList);
