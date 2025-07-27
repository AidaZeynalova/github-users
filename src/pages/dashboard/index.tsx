import { FC, ChangeEvent, useState } from "react";

import Input from "@/components/ui/input";
import { useUsersListQuery } from "@/api/users";
import useDebounce from "@/hooks/useDebounse";
import UserList from "@/components/user-list";
import { Search } from "@/assets/svg/search";
import Error from "@/components/ui/error";

import styles from "./dashboard.module.scss";

const Dashboard: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedValue = useDebounce<string>(searchValue, 500);

  const {
    data: usersList,
    isFetching,
    isError,
  } = useUsersListQuery(debouncedValue, {
    skip: !debouncedValue,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const inputWrapperStyle = debouncedValue ? styles.inputWrapper : "";

  if (isError) return <Error message="an error occurred" />;

  return (
    <div className={styles.dashboard}>
      <h1>Find the user</h1>
      <div className={styles.searchWrapper}>
        <div className={inputWrapperStyle}>
          <Input
            icon={<Search />}
            placeholder="search user"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {debouncedValue && (
          <UserList
            userList={usersList?.items || []}
            errorMessage="User not found"
            isError={usersList?.items.length === 0}
            isLoading={isFetching}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
