import { baseApi } from "@/redux/baseApi"

export const  rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    riderRequest: builder.mutation({
      query: (userInfo) => ({
        url: "/ride/request",
        method: "POST",
        data: userInfo,   
      }),
    }),

  }),
});


export const { useRiderRequestMutation} = rideApi