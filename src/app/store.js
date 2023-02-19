import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { articlepi } from "../features/APIslice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [articlepi.reducerPath]: articlepi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlepi.middleware),
});
setupListeners(store.dispatch);
