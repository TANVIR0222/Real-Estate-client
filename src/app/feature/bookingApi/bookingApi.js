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
      query: (id) => `all-trip-list/${id}`
    }),
   
    // singleCategoryProperty: builder.query({
    //   query: (_id) => ({
    //     url: `single-Property/${_id}`,
    //   }),
    // }),
  }),
})

export const { useAddFavoiteMutation  , useFavoritePropertyQuery } = bookingApi