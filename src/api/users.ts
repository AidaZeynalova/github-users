import { baseApi } from ".";

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    usersList: build.query<any, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useUsersListQuery } = usersApi;
