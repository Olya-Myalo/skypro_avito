import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: () => 'ads',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Ads', id })),
              { type: 'Ads', id: 'LIST' },
            ]
          : [{ type: 'Ads', id: 'LIST' }],
    }),
    getAdsId: builder.query({
      query: (adId) => `ads/${adId}`,
    }),
    getUserInfo: builder.query({
      query: () => `user`,
    }),
    getAdsUser: builder.query({
      query: () => `ads/me`,
    }),
    getAllComments: builder.query({
      query: () => 'comments',
      providesTags: ['Ads'],
    }),
    addComment: builder.mutation({
      query: ({ id, text }) => ({
        url: `ads/${id}/comments`,
        method: 'POST',
        body: { text },
      }),
      invalidatesTags: [{ type: 'Ads', id: 'LIST' }],
    }),
    getAllCurrentUserComments: builder.query({
      query: (id) => `ads/${id}/comments`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Ads', id })),
              { type: 'Ads', id: 'LIST' },
            ]
          : [{ type: 'Ads', id: 'LIST' }],
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
        localStorage.setItem('access_token', response.access_token)
        localStorage.setItem('refresh_token', response.refresh_token)
        return response
      },
    }),
    addAds: builder.mutation({
      query: ({ title, description, price }) => ({
        url: `ads?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(
          description
        )}&price=${encodeURIComponent(price)}`,
        method: 'POST',
        body: 'file',
      }),
    }),
    editAds: builder.mutation({
      query: ({ title, description, price, id }) => ({
        url: `ads/${id}`,
        method: 'PATCH',
        body: {
          title: title,
          description: description,
          price: price,
        },
      }),
    }),
    addImgAds: builder.mutation({
      query: ({ id, file }) => ({
        url: `ads/${id}/image`,
        method: 'POST',
        body: file,
      }),
    }),

    delImgAds: builder.mutation({
      query: (data) => {
        const url = data.image.url
        return {
          url: `ads/${data.id}/image?file_url=${url}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Ads'],
    }),
    delAdsId: builder.mutation({
      query: ({ adId }) => {
        return { url: `ads/${adId}`, method: 'DELETE' }
      },
    }),
    userUpdate: builder.mutation({
      query: (userData) => ({
        url: 'user',
        method: 'PATCH',
        body: userData,
      }),
      invalidatesTags: ['Ads'],
    }),
    changeAvatar: builder.mutation({
      query: (fileData) => ({
          url: "/user/avatar",
          method: "POST",
          body: fileData,
      }),
      invalidatesTags: ['Ads'],
    }),
  }),
})
  
export const {
  useGetAdsQuery,
  useGetAdsIdQuery,
  useGetUserInfoQuery,
  useRefreshTokenMutation,
  useGetAllCommentsQuery,
  useAddCommentMutation,
  useGetAllCurrentUserCommentsQuery,
  useAddAdsMutation,
  useEditAdsMutation,
  useAddImgAdsMutation,
  useDelImgAdsMutation,
  useDelAdsIdMutation,
  useUserUpdateMutation,
  useChangeAvatarMutation,
  useGetAdsUserQuery
} = Api