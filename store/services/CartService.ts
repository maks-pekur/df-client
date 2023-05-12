import { ICartItems } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
	reducerPath: 'cartApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
	tagTypes: ['Cart'],
	endpoints: builder => ({
		fetchAllCartItems: builder.query<ICartItems[], any>({
			query: () => ({
				url: `/cart/6458f0cfb2748e9a47cb72ae`,
			}),
			providesTags: result => ['Cart'],
		}),
		addToCart: builder.mutation<any, any>({
			query: ({ productId, userId }) => ({
				url: `/cart/add/`,
				method: 'POST',
				body: JSON.stringify({ productId, userId }),
			}),
			invalidatesTags: ['Cart'],
		}),
		removeAll: builder.mutation<any, any>({
			query: ({ userId }) => ({
				url: `/cart/all/`,
				method: 'DELETE',
				body: userId,
			}),
			invalidatesTags: ['Cart'],
		}),
	}),
})

export const { useFetchAllCartItemsQuery, useAddToCartMutation } = cartApi
