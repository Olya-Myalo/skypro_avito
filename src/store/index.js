import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import { tokenQuery } from '../store/Service/token'
import { Api } from './Service/serviceQuery'

export const store = configureStore({
  reducer: {
    user: authReducer,
    [Api.reducerPath]: Api.reducer,
    [tokenQuery.reducerPath]: tokenQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware).concat(tokenQuery.middleware),
})
