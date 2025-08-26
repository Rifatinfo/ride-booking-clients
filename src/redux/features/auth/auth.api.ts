import { baseApi } from "@/redux/baseApi"

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    riderRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/users/register",
        method: "POST",
        data: userInfo,   
      }),
    }),
    driverRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/users/register",
        method: "POST",
        data: userInfo,   
      }),
    }),
  }),
});


export const { useRiderRegisterMutation , useDriverRegisterMutation} = authApi