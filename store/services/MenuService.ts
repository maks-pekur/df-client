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
		fetchOneMenuItems: builder.query<IMenuItem, string>({
			query: id => ({
				url: `/menu/${id}`,
			}),
		}),
		fetchAllCategories: builder.query<ICategory[], any>({
			query: () => ({
				url: `/categories`,
			}),
		}),
		fetchPopular: builder.query({
			query: () => ({
				url: `/populars`,
			}),
		}),
	}),
})

export const {
	useFetchAllMenuItemsQuery,
	useFetchAllCategoriesQuery,
	useFetchPopularQuery,
	useFetchOneMenuItemsQuery
} = menuApi
