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
  }),
})

export const { useAddPropertyMutation } = propertyApi