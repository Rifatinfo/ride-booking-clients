import { baseApi } from "@/redux/baseApi"

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contactRequest: builder.mutation({
      query: (userInfo) => ({
        url: "/contact",
        method: "POST",
        data: userInfo,
      }),
    }),
  }),
});


export const { useContactRequestMutation} = contactApi