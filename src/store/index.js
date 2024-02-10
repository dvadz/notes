import { configureStore } from "@reduxjs/toolkit";
import { notesApi } from "./apis/notesApi";
import { usersApi } from "./apis/usersApi";
import { loginReducers } from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    app: loginReducers,
    [notesApi.reducerPath]: notesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(notesApi.middleware)
      .concat(usersApi.middleware);
  },
});

export * from "./apis/notesApi";
export * from "./apis/usersApi";
