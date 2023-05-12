import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storiesApi = createApi({
	reducerPath: 'storiesApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
	endpoints: builder => ({
		fetchAllStories: builder.query({
			query: () => ({
				url: `/stories`,
			}),
		}),
	}),
})

export const { useFetchAllStoriesQuery } = storiesApi
