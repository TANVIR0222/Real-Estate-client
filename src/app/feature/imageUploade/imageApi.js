import getBaseUrl from '@/utils/getBaseUrl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/file/` }),
  endpoints: (builder) => ({
    imageUploade: builder.mutation({
        query: (formData) => ({
            url: `uploade`,
            method: 'POST',
            body: formData,
        }),
    })
  }),
})


export const { useImageUploadeMutation } = imageApi