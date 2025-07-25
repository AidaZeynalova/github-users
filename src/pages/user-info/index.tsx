import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useUserQuery } from "@/api/user";
import Loading from "@/components/loading";

const UserInfo = () => {
  const { userName } = useParams();

  const { data: userData, isLoading } = useUserQuery(userName);

  console.log(userData);

  if (isLoading) return <Loading />;

  return (
    <div>
      <div>
        <img src={userData.avatar_url} />
      </div>
      <div>{userData.bio}</div>
      <div>{userData.public_repos}</div>
      <Link to={userData.repos_url}>link to profile</Link>
    </div>
  );
};

export default UserInfo;
