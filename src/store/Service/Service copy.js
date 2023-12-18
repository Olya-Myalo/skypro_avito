import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../auth'

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access
      console.debug('Использую токен из стора', { token })
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)
  console.debug('Результат первого запроса', { result })

  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    api.dispatch(setAuth(null))
    window.location.navigate('/signin')
  }

  const { auth } = api.getState()
  console.debug('Данные пользователя в сторе', { auth })
  if (!auth.refresh) {
    return forceLogout()
  }
  const refreshResult = await baseQuery(
    ({ access_token, refresh_token }) => ({
      url: 'auth/login',
      method: 'PUT',
      body: { access_token, refresh_token },
    }),
    api,
    extraOptions,
  )

  console.debug('Результат запроса на обновление токена', { refreshResult })

  if (!refreshResult.data.access) {
    return forceLogout()
  }

  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }))
  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }

  console.debug('Повторный запрос завершился успешно')

  return retryResult
}

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: baseQueryWithReauth,
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
    getAdsUser: builder.query({
      query: () => `ads/me`,
    }),
    userUpdate: builder.mutation({
      query: (userData) => ({
        url: 'user',
        method: 'PATCH',
        body: userData,
      }),
    }),
    changeAvatar: builder.mutation({
      query: (fileData) => ({
        url: '/user/avatar',
        method: 'POST',
        body: fileData,
      }),
    }),
  }),
})

export const {
  useGetAdsQuery,
  useGetAdsIdQuery,
  useGetUserInfoQuery,
  useRefreshTokenMutation,
  useUserUpdateMutation,
  useChangeAvatarMutation,
  useGetAdsUserQuery,
} = Api
