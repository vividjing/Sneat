import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: "authApi",
  tagTypes: ["auth"],
  endpoints: (build) => ({
    register: build.mutation({
      query: (userInfo) => ({
        url: `/register`,
        method: "POST",
        body: userInfo,
      }),
      providesTags: ["auth"],
    }),
    logIn: build.mutation({
      query: (userInfo) => ({
        url: `/login`,
        method: "Post",
        body: userInfo,
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const { useRegisterMutation, useLogInMutation } = authApi;
