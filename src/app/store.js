import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/usersApi";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [usersApi.reducerPath]: usersApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
})