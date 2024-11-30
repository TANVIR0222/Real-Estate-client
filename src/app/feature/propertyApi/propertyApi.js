import getBaseUrl from '@/utils/getBaseUrl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const propertyApi = createApi({
  reducerPath: 'propertyApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/post/` }),
  endpoints: (builder) => ({
    addProperty: builder.mutation({
      query: (newData) => ({
        url: `add-property`,
        method: 'POST',
        body: newData,
      }),
    }),
    categoryFilter: builder.query({
      query: (category) => `category?category=${category}`
    }),
    singleCategoryProperty: builder.query({
      query: (_id) => ({
        url: `single-Property/${_id}`,
      }),
    }),
    searchCategoryProperty: builder.query({
      query: (title) => ({
        url: `search-Property?search=${title}`,
      }),
    }),
  }),
})

export const { useAddPropertyMutation , useCategoryFilterQuery , useSingleCategoryPropertyQuery , useSearchCategoryPropertyQuery } = propertyApi