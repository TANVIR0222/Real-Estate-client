import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authApi } from './feature/auth/authApi'
import  authReducer  from './feature/auth/authSlice'
import { propertyApi } from './feature/property/propertyApi'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,propertyApi.middleware,),
})


setupListeners(store.dispatch)