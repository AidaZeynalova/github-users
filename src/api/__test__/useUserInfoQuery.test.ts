import { rest } from "msw";
import { renderHook, act, waitFor } from "@testing-library/react";

import userApi, { useUserInfoQuery, UserInfoProps } from "../user";
import { createWrapper, server } from "./setupApiStore";
import { API_URL } from "@/constant";
import { NOT_FOUND_MSG, SERVER_ERROR_MSG } from "./testConstant";

const mockUser: UserInfoProps = {
  avatar_url: "https://example.com/avatar.png",
  name: "John Doe",
  bio: "Developer",
  public_repos: "42",
  html_url: "https://github.com/johndoe",
};

const USER_NAME = "john";
const URL = `${API_URL}/users/${USER_NAME}`;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const wrapper = createWrapper(userApi);
const getHook = () =>
  renderHook(() => useUserInfoQuery(USER_NAME), { wrapper });

test("throws error on invalid userInfo data structure", async () => {
  server.use(
    rest.get(URL, (req, res, ctx) => {
      return res(ctx.json([{ wrongField: "unexpected", anotherField: 123 }]));
    })
  );

  const { result } = getHook();

  await waitFor(() => expect(result.current.isError).toBe(true));
});

test("handles 404 Not Found error", async () => {
  server.use(
    rest.get(URL, (req, res, ctx) =>
      res(ctx.status(404), ctx.json({ message: NOT_FOUND_MSG }))
    )
  );
  const { result } = getHook();

  await act(async () => {
    await result.current.refetch();
  });

  await waitFor(() => expect(result.current.isError).toBe(true));
  console.log(result.current);
  // expect(result.current.error.status).toBe(404);
});

test("handles 500 Internal Server Error", async () => {
  server.use(
    rest.get(URL, (req, res, ctx) =>
      res(ctx.status(500), ctx.json({ message: SERVER_ERROR_MSG }))
    )
  );

  const { result } = getHook();

  await waitFor(() => expect(result.current.isError).toBe(true));
  // expect(result.current.error.status).toBe(500);
  // expect(result.current.error.message).toEqual(SERVER_ERROR_MSG);
});

test("returns 200 OK response correctly", async () => {
  server.use(
    rest.get(URL, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockUser));
    })
  );
  const { result } = getHook();

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toEqual(mockUser);
});
