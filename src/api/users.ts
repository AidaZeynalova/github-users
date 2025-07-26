import { baseApi } from ".";

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    usersList: build.query<any, string>({
      query: (query) => ({
        url: `/search/users?q=${query}+in:login`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUsersListQuery } = usersApi;
