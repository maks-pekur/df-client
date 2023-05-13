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
		addToCart: builder.mutation({
			query: good => ({
				url: `/cart/add/`,
				method: 'POST',
				body: good,
			}),
			invalidatesTags: ['Cart'],
		}),
		updateCount: builder.mutation({
			query: (id, count) => ({
				url: `/cart/qty/${id}`,
				method: 'PATCH',
				body: count,
			}),
			invalidatesTags: ['Cart'],
		}),
		removeOne: builder.mutation({
			query: id => ({
				url: `/cart/one/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Cart'],
		}),
		removeAll: builder.mutation({
			query: id => ({
				url: `/cart/all/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Cart'],
		}),
	}),
})

export const {
	useFetchAllCartItemsQuery,
	useAddToCartMutation,
	useRemoveOneMutation,
	useRemoveAllMutation,
	useUpdateCountMutation,
} = cartApi
