import { ReactNode } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";

export const server = setupServer();

interface StoreProviderProps {
  children: ReactNode;
}

export const createWrapper = (apiSlice: any) => {
  const { store } = setupApiStore(apiSlice);

  const StoreProvider = ({ children }: StoreProviderProps) => (
    <Provider store={store}>{children}</Provider>
  );

  StoreProvider.displayName = "StoreProvider";

  return StoreProvider;
};

const setupApiStore = (apiSlice: any) => {
  const store = configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

  return { store };
};
export default setupApiStore;
