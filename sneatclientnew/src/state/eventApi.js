import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL2,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().global.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  reducerPath: "eventApi",
  tagTypes: ["event"],

  endpoints: (build) => ({
    createEvent: build.mutation({
      query: (eventInfo) => {
        return {
          url: "",
          method: "POST",
          body: eventInfo,
        };
      },
      invalidatesTags: ["event"],
    }),
    getEvent: build.query({
      query: () => {
        return "";
      },
      providesTags: ["event"],
    }),
    updateEvent: build.mutation({
      query: (eventInfo) => ({
        url: `/${eventInfo.eventId}`,
        method: "PUT",
        body: eventInfo,
      }),
      invalidatesTags: ["event"],
    }),
    deleteEvent: build.mutation({
      query: (eventInfo) => ({
        url: `/${eventInfo.eventId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["event"],
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetEventQuery,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventApi;
