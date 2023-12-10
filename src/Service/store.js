import {configureStore} from "@reduxjs/toolkit"
import { ApiAds } from "./ServiceAds" 

export const  store = configureStore({
    reducer: {
        [ApiAds.reducerPath]: ApiAds.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ApiAds.middleware),
})