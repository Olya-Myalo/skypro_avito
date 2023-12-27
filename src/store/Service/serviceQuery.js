import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../slices/auth'

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.access
      console.log('state', getState())
      // console.debug('Использую токен из стора', { token })
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)
  // console.debug('Результат первого запроса', { result })

  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    api.dispatch(setAuth(null))
    window.location.navigate('/signin')
  }

  const { user } = api.getState()
  // console.debug('Данные пользователя в сторе', { auth })
  if (!user.refresh) {
    return forceLogout()
  }
  const refreshResult = await baseQuery(
    () => ({
      url: 'auth/login',
      method: 'PUT',
      body: { access: user.access, refresh: user.refresh },
    }),
    api,
    extraOptions,
  )

  // console.debug('Результат запроса на обновление токена', { refreshResult })

  if (!refreshResult.data.access) {
    return forceLogout()
  }

  api.dispatch(setAuth({ ...user, access: refreshResult.data.access }))
  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }

  // console.debug('Повторный запрос завершился успешно')

  return retryResult
}

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Ads'],

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
      providesTags: ['Ads'],
    }),
    getUserInfo: builder.query({
      query: () => `user`,
      providesTags: ['Ads'],
    }),
    getAdsUser: builder.query({
      query: () => `ads/me`,
      providesTags: ['Ads'],
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
    addAds: builder.mutation({
      query: ({ title, description, price }) => ({
        url: `ads?title=${encodeURIComponent(
          title,
        )}&description=${encodeURIComponent(
          description,
        )}&price=${encodeURIComponent(price)}`,
        method: 'POST',
        body: 'file',
      }),
      invalidatesTags: ['Ads'],
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
      invalidatesTags: ['Ads'],
    }),
    addImgAds: builder.mutation({
      query: ({ id, file }) => ({
        url: `ads/${id}/image`,
        method: 'POST',
        body: file,
      }),
      invalidatesTags: ['Ads'],
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
      invalidatesTags: ['Ads'],
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
        url: '/user/avatar',
        method: 'POST',
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
  useGetAdsUserQuery,
  useGetTokenQuery,
} = Api
