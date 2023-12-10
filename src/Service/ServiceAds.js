import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

export const ApiAds = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    mode: 'no-cors',
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
    }),
  }),
})

export const { useGetAdsQuery } = ApiAds