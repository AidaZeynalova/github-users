import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useUserQuery } from "@/api/user";
import Loading from "@/components/loading";
import Error from "@/components/error";
import Button from "@/components/ui/button";

import styles from "./user-info.module.scss";

const UserInfo: FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const navigate = useNavigate();

  const { data: userData, isLoading, isError } = useUserQuery(userName);

  if (isLoading) return <Loading fullSize />;
  if (!userName || isError || !userData)
    return <Error message="An error occurred" />;

  return (
    <div className={styles.userInfo}>
      <h1>User details</h1>
      <div className={styles.userInfoWrapper}>
        <div className={styles.avatar}>
          <img src={userData.avatar_url} alt={userData.name} />
        </div>
        <div className={styles.about}>
          <div className={styles.fieldItem}>
            <span className={styles.fieldTitle}>Name: </span>
            {userData.name}
          </div>
          <div>
            <span className={styles.fieldTitle}>Biography: </span>
            {userData.bio || "No information about biography"}
          </div>
          <div>
            <span className={styles.fieldTitle}>Number of repositories: </span>
            {userData.public_repos}
          </div>
          <div className={styles.buttonsWrapper}>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <Button to={userData.html_url} background="secondary">
              link to profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
