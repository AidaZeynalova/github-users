import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import { useUserQuery } from "@/api/user";
import Loading from "@/components/loading";
import Button from "@/components/button";

import styles from "./user-info.module.scss";

const UserInfo = () => {
  const { userName } = useParams();
  const navigate = useNavigate();

  const { data: userData, isLoading } = useUserQuery(userName);

  if (isLoading) return <Loading />;

  return (
    <div className={styles.userInfo}>
      <h1>User details</h1>
      <div className={styles.userInfoWrapper}>
        <div className={styles.avatar}>
          <img src={userData.avatar_url} />
        </div>
        <div className={styles.about}>
          <div className={styles.fieldItem}>
            <span className={styles.fieldTitle}>Name: </span>
            {userData.name}
          </div>
          <div>
            <span className={styles.fieldTitle}>Biography: </span>
            {userData.bio}
          </div>
          <div>
            <span className={styles.fieldTitle}>Number of repositories: </span>
            {userData.public_repos}
          </div>
          <div className={styles.buttonsWrapper}>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <Link to={userData.html_url}>link to profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
