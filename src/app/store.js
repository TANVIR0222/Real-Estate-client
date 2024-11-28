import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authApi } from './feature/auth/authApi'
import  authReducer  from './feature/auth/authSlice'
import { propertyApi } from './feature/propertyApi/propertyApi'
import { imageApi } from './feature/imageUploade/imageApi'
import  propertyReducer  from './feature/propertyApi/propertySlice'
import { bookingApi } from './feature/bookingApi/bookingApi'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
    [authApi.reducerPath]: authApi.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,propertyApi.middleware,imageApi.middleware,bookingApi.middleware),
})


setupListeners(store.dispatch)