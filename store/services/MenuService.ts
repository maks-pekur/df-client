import { ICategory, IMenuItem } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const menuApi = createApi({
	reducerPath: 'menuApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
	endpoints: builder => ({
		fetchAllMenuItems: builder.query<IMenuItem[], any>({
			query: () => ({
				url: `/menu`,
			}),
		}),
		fetchAllCategories: builder.query<ICategory[], any>({
			query: () => ({
				url: `/categories`,
			}),
		}),
		fetchPopular: builder.query({
			query: () => ({
				url: `/popular`,
			}),
		}),
	}),
})

export const { useFetchAllMenuItemsQuery, useFetchAllCategoriesQuery, useFetchPopularQuery } = menuApi
