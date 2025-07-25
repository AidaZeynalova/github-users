import { baseApi } from ".";

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    user: build.query<any, any>({
      query: (userName) => ({
        url: `/users/${userName}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserQuery } = usersApi;
