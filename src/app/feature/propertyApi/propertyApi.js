import getBaseUrl from '@/utils/getBaseUrl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const propertyApi = createApi({
  reducerPath: 'propertyApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/post/` }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    addProperty: builder.mutation({
      query: (newData) => ({
        url: `add-property`,
        method: 'POST',
        body: newData,
      }),
      invalidatesTags:['Post']
    }),
    categoryFilter: builder.query({
      query: (category) => `category?category=${category}`,
      providesTags:['Post']
    }),
    singleCategoryProperty: builder.query({
      query: (_id) => ({
        url: `single-Property/${_id}`,
      }),
      providesTags:['Post']

    }),
    searchCategoryProperty: builder.query({
      query: (title) => ({
        url: `search-Property?search=${title}`,
      }),
    }),
    providesTags:['Post']

  }),
})

export const { useAddPropertyMutation , useCategoryFilterQuery , useSingleCategoryPropertyQuery , useSearchCategoryPropertyQuery } = propertyApi