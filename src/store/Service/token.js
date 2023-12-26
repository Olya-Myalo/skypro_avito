import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tokenQuery = createApi({
  reducerPath: 'tokenQuery',
  tagTypes: ['Ads'],

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => ({
    accessTokenUser: build.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
        headers: {
          'content-type': 'application/json',
        },
        invalidatesTags: [{ type: 'Ads', id: 'LIST' }],
      }),
    }),
    refreshTokenUser: build.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'PUT',
        body,
        headers: {
          'content-type': 'application/json',
        },
        invalidatesTags: [{ type: 'Ads', id: 'LIST' }],
      }),
    }),
  }),
})

export const { useAccessTokenUserMutation, useRefreshTokenUserMutation } =
  tokenQuery