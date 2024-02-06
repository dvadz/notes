import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const notesApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  endpoints: (builder) => ({
    fetchNotes: builder.query({
      query: (user) => {
        return {
          url: `/notes/${user.id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export { notesApi };
export const { useFetchNotesQuery } = notesApi;
