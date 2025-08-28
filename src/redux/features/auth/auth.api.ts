import { baseApi } from "@/redux/baseApi"
import type { IResponse } from "@/types";
import type { ISendOtp, IVerifyOtp } from "@/types/auth.types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    riderRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/users/register",
        method: "POST",
        data: userInfo,   
      }),
    }),
    riderLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
        invalidatesTags: ["USER"],   
      }),
    }),
    driverRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/users/register",
        method: "POST",
        data: userInfo,   
      }),
    }),
    driverLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,   
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,   
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,   
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET", 
      }),
      providesTags : ["USER"]
    }),
  logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST", 
      }),
      invalidatesTags : ["USER"]
    }),
  }),
});


export const { useRiderRegisterMutation , useDriverRegisterMutation, useDriverLoginMutation, useRiderLoginMutation, useSendOtpMutation , useVerifyOtpMutation, useUserInfoQuery, useLogoutMutation} = authApi