import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Input from "@/components/input";
import ResultLine from "@/components/result-line";
import { useUsersListQuery } from "@/api/users";
import { useUserQuery } from "@/api/user";
import useDebounce from "@/hooks/useDebounse";

import styles from "./dashboard.module.scss";

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce<string>(searchValue, 500);

  // const { data: usersList } = useUsersListQuery();
  const {
    data: user,
    isLoading,
    isError,
  } = useUserQuery(debouncedValue, { skip: !debouncedValue });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.dashboard}>
      <div>
        <Input
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          placeholder="search user"
          onChange={(e) => handleChange(e)}
        />
        {debouncedValue && (
          <ResultLine
            to={`/${searchValue}`}
            icon={user?.avatar_url}
            name={user?.login}
            isLoading={isLoading}
            isError={isError}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
