import { baseApi } from "@/redux/baseApi"

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allDriver: builder.query({
      query: () => ({
        url: "/users/all-drivers",
        method: "GET" 
      }),
      providesTags : ["DRIVER"]
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateDriverStatus: builder.mutation<any, {id : string, status : string}>({
      query: ({id, status}) => ({
        url:`/users/driver/${id}/status`,
        method: "PATCH",
        data : {status}
      }),
      invalidatesTags : ["DRIVER"]
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockedDriver: builder.mutation<any, {id : string, isBlocked : boolean}>({
      query: ({id, isBlocked}) => ({
        url:`/users/block/${id}`,
        method: "PATCH",
        data : {isBlocked}
      }),
      invalidatesTags : ["DRIVER"]
    })
  }),
});


export const { useAllDriverQuery, useUpdateDriverStatusMutation, useBlockedDriverMutation} = driverApi