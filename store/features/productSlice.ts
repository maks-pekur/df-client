import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type RequestState = 'idle' | 'pending' | 'fulfilled' | 'failed'

interface ProductState {
	data: []
	status: string
	error: string | null
}

const initialState: ProductState = {
	data: [],
	status: 'idle',
	error: null,
}

export const fetchProducts = createAsyncThunk(
	'api/fetchProducts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios(
				`${process.env.NEXT_PUBLIC_BASE_URL}/products`
			)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data.message)
		}
	}
)

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(
			fetchProducts.pending,
			(state: ProductState, action: any) => {
				state.status = 'pending'
				state.data = []
				state.error = null
			}
		)

		builder.addCase(
			fetchProducts.fulfilled,
			(state: ProductState, action: any) => {
				state.status = 'fulfilled'
				state.data = action.payload
				state.error = null
			}
		)

		builder.addCase(
			fetchProducts.rejected,
			(state: ProductState, action: any) => {
				state.status = 'failed'
				state.data = []
				state.error = action.error.message
			}
		)
	},
})

export default productSlice.reducer
