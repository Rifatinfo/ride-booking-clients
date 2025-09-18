import { baseApi } from "@/redux/baseApi"

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    riderRequest: builder.mutation({
      query: (userInfo) => ({
        url: "/ride/request",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["RIDER"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
       await queryFulfilled;
          dispatch(rideApi.util.invalidateTags(["RIDER"])); // force refetch
      },
    }),
    adminAnalytics: builder.query({
      query: () => ({
        url: "/ride/analytics",
        method: "GET",
      }),
      providesTags: ["RIDER"]
    }),
    allRiderRequest: builder.query({
      query: () => ({
        url: "/ride/request",
        method: "GET",
      }),
      providesTags: ["RIDER"]
    }),
    singleRiderRequest: builder.query({
      query: () => ({
        url: "/ride/single-request",
        method: "GET",
      }),
      providesTags: ["RIDER"]
    }),
    allRideHistory: builder.query({
      query: () => ({
        url: "/ride/all-history",
        method: "GET",
      }),
      providesTags: ["RIDER"]
    }),
    updateRideStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/ride/status/${id}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["RIDER"]
    }),
    cancelRideStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/ride/rider-cancel-status/${id}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["RIDER"]
    }),
  }),
});


export const { useCancelRideStatusMutation,useAdminAnalyticsQuery, useRiderRequestMutation, useAllRiderRequestQuery, useUpdateRideStatusMutation, useAllRideHistoryQuery, useSingleRiderRequestQuery } = rideApi