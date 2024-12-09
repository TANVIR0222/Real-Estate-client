import getBaseUrl from '@/utils/getBaseUrl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/booking/` }),
  
  endpoints: (builder) => ({
    addFavoite: builder.mutation({
      query: (newData) => ({
        url: `create`,
        method: 'POST',
        body: newData,
      }),
    }),
    favoriteProperty: builder.query({
      query: (id) => `favorite-booking/${id}`
    }),
   
    bookingDelete: builder.mutation({
      query: (id) => ({
        url: `favorite-user/${id}`,
        method:'DELETE',
      }),
    }),
  }),
})

export const { useAddFavoiteMutation  , useFavoritePropertyQuery , useBookingDeleteMutation } = bookingApi