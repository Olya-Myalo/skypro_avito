import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')
      console.log(token)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: () => 'ads',
    }),
    getAdsId: builder.query({
      query: (adId) => `ads/${adId}`,
    }),
    getUserInfo: builder.query({
      query: () => `user`,
    }),
    userUpdate: builder.mutation({
      query: (userData) => ({
        url: 'user',
        method: 'PATCH',
        body: userData,
      }),
    }),
    changeAvatar: builder.mutation((fileData) => {
      const formData = new FormData();
      formData.append("file", fileData.file);
    
      return {
        url: "/user/avatar",
        method: "POST",
        body: formData,
      };
    }),
    refreshToken: builder.mutation({
      query: ({ access_token, refresh_token }) => ({
        url: 'auth/login',
        method: 'PUT',
        body: { access_token, refresh_token },
      }),
      onError: (error) => {
        console.error('Error refreshing token:', error)

        return { error: 'Token refresh failed' }
      },
      transformResponse: (response) => {
        localStorage.setItem('access_token', JSON.stringify(response.access_token))
        localStorage.setItem('refresh_token', JSON.stringify(response.refresh_token))
        return response
      },
    }),
  }),
})

export const {
  useGetAdsQuery,
  useGetAdsIdQuery,
  useGetUserInfoQuery,
  useRefreshTokenMutation,
  useUserUpdateMutation,
  useChangeAvatarMutation
} = Api
