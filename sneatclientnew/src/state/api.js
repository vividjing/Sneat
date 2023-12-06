import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().global.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  reducerPath: "adminApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (email) => `/${email}`,
      providesTags: ["User"],
    }),
    updateUser: build.mutation({
      query: (userInfo) => ({
        url: `/${userInfo.userEmail}`,
        method: "PUT",
        body: userInfo,
      }),
      providesTags: ["User"],
    }),
    updatePwd: build.mutation({
      query: (userInfo) => ({
        url: `/pwd/${userInfo.userEmail}`,
        method: "PUT",
        body: userInfo,
      }),
      providesTags: ["User"],
    }),

    deleteUser: build.mutation({
      query: (userInfo) => ({
        url: `/${userInfo.userEmail}`,
        method: "DELETE",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUpdatePwdMutation,
} = api;
