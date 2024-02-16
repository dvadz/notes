import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const notesApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  endpoints: (builder) => ({
    fetchNotes: builder.query({
      query: (user) => {
        return {
          url: "/notes",
          params: { userId: user.id },
          method: "GET",
        };
      },
    }),
    addNote: builder.mutation({
      query: (user, { title, body }) => {
        return {
          url: "/notes",
          method: "POST",
          body: { userId: user.id, title: title, body: body },
        };
      },
    }),
  }),
});

export { notesApi };
export const { useFetchNotesQuery, useAddNoteMutation } = notesApi;
