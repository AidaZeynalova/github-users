import { FC } from "react";

import ResultLine from "@/components/result-line";
import Loading from "@/components/loading";
import Error from "@/components//error";

import styles from "./search-dropdown.module.scss";

interface UserProps {
  login: string;
  avatar_url: string;
}
interface SearchDropdownProps {
  userList: UserProps[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const SearchDropdown: FC<SearchDropdownProps> = ({
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
          <ResultLine
            to={`/${item.login}`}
            icon={item.avatar_url}
            name={item.login}
          />
        );
      })}
    </ul>
  );
};

export default SearchDropdown;
