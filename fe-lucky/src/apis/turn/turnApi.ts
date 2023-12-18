//http://localhost:8282/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const turnApi  = createApi({
  reducerPath: 'Turn',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API
  }),
  tagTypes: ['Turn'],
  endpoints: (builder) => ({
    getAllTurns: builder.query<any[], void>({
      query: () => {
        return {
          url: '/query-all/categoryDepartments',
          method: 'GET'
        }
      },
      providesTags: ['Turn']
    }),
    createTurns: builder.mutation<any[], any>({
      query: (data) => {
        return {
          url: '/Turn/create',
          method: 'POST',
          body: data
        }
      },
      invalidatesTags: ['Turn']
    }),
    getIDTurn: builder.query<any[], any>({
      query: ({ id, page, limit }) => {
        return {
          url: `/query-id/Turn/${id}`,
          method: 'GET',
          params: {
            page: page,
            limit: limit
          }
        }
      },
      providesTags: ['Turn']
    }),
    removeTurn: builder.mutation({
      query: (id) => {
        return {
          url: `/remove/Turn/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: ['Turn']
    }),
  })
})

export const {
  useGetAllTurnsQuery,
  useCreateTurnsMutation,
  useGetIDTurnQuery,
  useRemoveTurnMutation,
} = turnApi
export default turnApi
