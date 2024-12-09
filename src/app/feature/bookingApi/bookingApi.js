import getBaseUrl from '@/utils/getBaseUrl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/booking/` }),
  tagTypes: ['Booking'],

  endpoints: (builder) => ({
    addFavoite: builder.mutation({
      query: (newData) => ({
        url: `create`,
        method: 'POST',
        body: newData,
      }),
      invalidatesTags: ['Booking'],
    }),
    favoriteProperty: builder.query({
      query: (id) => `favorite-booking/${id}`,
      providesTags: ['Booking'],
    }),
   
    bookingDelete: builder.mutation({
      query: (id) => ({
        url: `favorite-user/${id}`,
        method:'DELETE',
      }),
      invalidatesTags: ['Booking'],
    }),
  }),
})

export const { useAddFavoiteMutation  , useFavoritePropertyQuery , useBookingDeleteMutation } = bookingApi