import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import { Api } from './Service/serviceQuery'

export const store = configureStore({
  reducer: {
    user: authReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
})
