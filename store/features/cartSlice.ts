import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type RequestState = 'idle' | 'pending' | 'fulfilled' | 'rejected'

interface CartState {
	isOpen: boolean
	data: []
	status: string
	error: string | null
}

const initialState: CartState = {
	isOpen: false,
	data: [],
	status: 'idle',
	error: null,
}

export const fetchCart = createAsyncThunk('api/fetchCart', async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`)
	const data = await response.json()
	return data
})

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		openCart: state => {
			state.isOpen = true
		},
		closeCart: state => {
			state.isOpen = false
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCart.pending, (state: CartState, action: any) => {
			state.status = 'pending'
			state.data = []
			state.error = null
		})

		builder.addCase(fetchCart.fulfilled, (state: CartState, action: any) => {
			state.status = 'fulfilled'
			state.data = action.payload
			state.error = null
		})

		builder.addCase(fetchCart.rejected, (state: CartState, action: any) => {
			state.status = 'rejected'
			state.data = []
			state.error = action.payload
		})
	},
})


export const { openCart, closeCart } = cartSlice.actions

export default cartSlice.reducer
