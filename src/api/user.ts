import { baseApi } from ".";

interface UserInfoProps {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: string;
  html_url: string;
}

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    user: build.query<UserInfoProps, string | undefined>({
      query: (userName) => ({
        url: `/users/${userName}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserQuery } = usersApi;
