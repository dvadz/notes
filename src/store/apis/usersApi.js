import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),

  endpoints: (builder) => {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        query: (user) => {
          return {
            name: user.name,
          };
        },
      }),
    };
  },
});

export { usersApi };
export const { useFetchUsersQuery, useAddUserMutation } = usersApi;
