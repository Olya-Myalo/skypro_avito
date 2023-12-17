import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import { Api } from "./Service/Service" 

export const  store = configureStore({
    reducer: {
        user: userReducer,
        [Api.reducerPath]: Api.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(Api.middleware),
})