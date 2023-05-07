import { IMenuItem } from '@/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type RequestState = 'idle' | 'pending' | 'fulfilled' | 'failed'

interface MenuState {
	data: IMenuItem[]
	status: string
	error: string | null
}

const initialState: MenuState = {
	data: [],
	status: 'idle',
	error: null,
}

export const fetchMenu = createAsyncThunk<IMenuItem[]>(
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

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchMenu.pending, (state: MenuState, action: any) => {
			state.status = 'pending'
			state.data = []
			state.error = null
		})

		builder.addCase(fetchMenu.fulfilled, (state: MenuState, action: any) => {
			state.status = 'fulfilled'
			state.data = action.payload
			state.error = null
		})

		builder.addCase(fetchMenu.rejected, (state: MenuState, action: any) => {
			state.status = 'failed'
			state.data = []
			state.error = action.error.message
		})
	},
})

export default menuSlice.reducer
