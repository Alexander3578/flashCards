import { LoginArgs, ResponseGetMe, ResponseLogin } from '@/features/auth/api/auth-api.types'
import { baseApi } from '@/services/base-api'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseLogin, LoginArgs>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),
    me: builder.query<ResponseGetMe, void>({
      providesTags: ['Me'],
      query: () => '/v1/auth/me',
    }),
  }),
})

export const { useLoginMutation, useMeQuery } = authApi
