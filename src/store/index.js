import { configureStore } from "@reduxjs/toolkit";
import { notesApi } from "./apis/notesApi";

export const store = configureStore({
  reducer: { [notesApi.reducerPath]: notesApi.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(notesApi.middleware);
  },
});

export * from "./apis/notesApi";
