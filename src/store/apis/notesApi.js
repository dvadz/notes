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
      providesTags: (result, error, user) => {
        const tags = result.map((note) => {
          return { type: "note", id: note.id };
        });
        tags.push({ type: "user", id: user.id });
        return tags;
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
      invalidatesTags: (result, error, note) => {
        return [{ type: "user", id: note.userId }];
      },
    }),
    deleteNote: builder.mutation({
      query: (note) => {
        return {
          url: `/notes/${note.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (note) => {
        return [{ type: "note", id: note.id }];
      },
    }),
    editNote: builder.mutation({
      query: (note) => {
        return {
          url: `/notes/${note.id}`,
          method: "PUT",
          body: { ...note },
        };
      },
    }),
  }),
});

export { notesApi };
export const {
  useFetchNotesQuery,
  useAddNoteMutation,
  useDeleteNoteMutation,
  useEditNoteMutation,
} = notesApi;
