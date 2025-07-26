import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Input from "@/components/input";
import { useUsersListQuery } from "@/api/users";
import useDebounce from "@/hooks/useDebounse";
import SearchDropdown from "@/components/search-dropdown";

import styles from "./dashboard.module.scss";

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce<string>(searchValue, 500);

  const { data: usersList, isFetching } = useUsersListQuery(debouncedValue, {
    skip: !debouncedValue,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const inputWrapperStyle = debouncedValue ? styles.inputWrapper : "";

  return (
    <div className={styles.dashboard}>
      <h1>Find the user</h1>
      <div className={styles.searchWrapper}>
        <div className={inputWrapperStyle}>
          <Input
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            placeholder="search user"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {debouncedValue && (
          <SearchDropdown
            userList={usersList?.items}
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
