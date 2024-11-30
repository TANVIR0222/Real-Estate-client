import getBaseUrl from '@/utils/getBaseUrl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tripApi = createApi({
  reducerPath: 'tripApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/trip/` }),
  tagTypes: ['List'],
  endpoints: (builder) => ({
    addTripList: builder.mutation({
      query: (newData) => ({
        url: `trip-list`,
        method: 'POST',
        body: newData,
      }),
      invalidatesTags: ['List'],
    }),
    allTripList: builder.query({
      query: (id) => `all-trip-list/${id}`,
      providesTags:['List'],
    }),
  }),
})

export const { useAddTripListMutation , useAllTripListQuery } = tripApi