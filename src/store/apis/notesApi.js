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
      query: (note) => {
        return {
          url: "/notes",
          method: "POST",
          body: { title: note.title, body: note.body, userId: note.userId },
        };
      },
    }),
    deleteNote: builder.mutation({
      query: (note) => {
        return {
          url: `/notes/${note.id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export { notesApi };
export const { useFetchNotesQuery, useAddNoteMutation, useDeleteNoteMutation } =
  notesApi;
