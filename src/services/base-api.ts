import { baseQueryWithReauth } from '@/services/base-query-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi', //как name в slice(префикс перед основным action)
  tagTypes: ['Decks', 'Me'],
})
