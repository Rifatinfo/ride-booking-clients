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
    changePassword: builder.mutation({
      query: (userInfo) => ({
        url: "/users/change-password",
        method: "POST",
        data: userInfo,   
      }),
    }),
    editProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/users/me",
        method: "PUT",
        data: userInfo,   
      }),
      invalidatesTags: ["USER"], 
    }),
    updateEmergencyPhone: builder.mutation({
      query: (emergency_phone) => ({
        url: "/users/me/change",
        method: "PATCH",
        data: {emergency_phone},   
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setUserAvailability: builder.mutation<any, {isAvailable : boolean}>({
      query: ({isAvailable}) => ({
        url: "/users/availability",
        method: "PATCH",
        data: {isAvailable},   
      }),
      invalidatesTags : ["USER"]
    }),
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     setBlockAndUnBlock: builder.mutation<any, {isBlocked : boolean, userId : string}>({
      query: ({isBlocked, userId}) => ({
        url: `/users/toggle-block/${userId}`,
        method: "PATCH",
        data: {isBlocked},   
      }),
      invalidatesTags : ["USER"]
    }),
    
    driverLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo, 
        invalidatesTags: ["USER"],   
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
      providesTags: ["USER"],
    }),
    allUsers: builder.query({
      query: () => ({
        url: "/users",
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


export const { useEditProfileMutation,useUpdateEmergencyPhoneMutation,useSetBlockAndUnBlockMutation, useAllUsersQuery,useSetUserAvailabilityMutation, useChangePasswordMutation, useRiderRegisterMutation , useDriverRegisterMutation, useDriverLoginMutation, useRiderLoginMutation, useSendOtpMutation , useVerifyOtpMutation, useUserInfoQuery, useLogoutMutation} = authApi