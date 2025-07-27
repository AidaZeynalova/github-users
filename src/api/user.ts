import { baseApi } from ".";

export interface UserInfoProps {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: string;
  html_url: string;
}

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userInfo: build.query<UserInfoProps, string | undefined>({
      query: (userName) => ({
        url: `/users/${userName}`,
        method: "GET",
      }),
    }),
  }),
});

export default userApi;

export const { useUserInfoQuery } = userApi;
