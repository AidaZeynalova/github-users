import { baseApi } from ".";

interface UserItems {
  avatar_url: string;
  login: string;
}
interface Users {
  items: UserItems[];
}

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    usersList: build.query<Users, string>({
      query: (query) => ({
        url: `/search/users?q=${query}+in:login`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUsersListQuery } = usersApi;
