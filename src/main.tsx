import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import { AppRouter } from "./app/app-router";
import { baseApi } from "./api";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={baseApi}>
      <AppRouter />
    </ApiProvider>
  </StrictMode>
);
