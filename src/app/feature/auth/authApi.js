import getBaseUrl from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/auth/` }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (newUser) => ({
        url: "register",
        method: "POST",
        body: newUser,
      }),
    }),
    userLogin: builder.mutation({
      query: (login) => ({
        url: "singin",
        method: "POST",
        body: login,
      }),
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
    addProperty: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useUserRegisterMutation , useUserLoginMutation , useUserLogoutMutation} = authApi;
