import { CategoryDocument } from '@/types/category.interface'
import { ProductDocument } from '@/types/product.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const menuApi = createApi({
	reducerPath: 'menuApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
	endpoints: builder => ({
		fetchProducts: builder.query<ProductDocument[], any>({
			query: () => ({
				url: `/menu`,
			}),
		}),
		fetchOneProduct: builder.query<ProductDocument, string>({
			query: id => ({
				url: `/menu/${id}`,
			}),
		}),
		fetchAllCategories: builder.query<CategoryDocument[], any>({
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
	useFetchProductsQuery,
	useFetchOneProductQuery,
	useFetchAllCategoriesQuery,
	useFetchPopularQuery,
} = menuApi
