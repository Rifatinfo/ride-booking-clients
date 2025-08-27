import { baseApi } from "@/redux/baseApi"
import type { IResponse } from "@/types";
import type { ISendOtp } from "@/types/auth.types";

const authApi = baseApi.injectEndpoints({
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
    verifyOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,   
      }),
    }),
  }),
});


export const { useRiderRegisterMutation , useDriverRegisterMutation, useDriverLoginMutation, useRiderLoginMutation, useSendOtpMutation , useVerifyOtpMutation} = authApi