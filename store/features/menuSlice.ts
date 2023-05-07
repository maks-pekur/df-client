import { ICategory, IMenuItem } from '@/types'
import { api } from '@/utils/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type RequestState = 'idle' | 'pending' | 'fulfilled' | 'failed'

interface MenuState {
	data: IMenuItem[]
	categories: ICategory[]
	status: string
	error: string | null
}

const initialState: MenuState = {
	data: [],
	categories: [],
	status: 'idle',
	error: null,
}

export const fetchMenu = createAsyncThunk<IMenuItem[]>(
	'api/fetchProducts',
	async () => {
		return await api('/products').then(response => response.data)
	}
)

export const fetchCategories = createAsyncThunk<ICategory[]>(
	'api/fetchCategories',
	async () => {
		return await api('/categories').then(response => response.data)
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

		builder.addCase(
			fetchCategories.pending,
			(state: MenuState, action: any) => {
				state.status = 'pending'
				state.categories = []
				state.error = null
			}
		)

		builder.addCase(
			fetchCategories.fulfilled,
			(state: MenuState, action: any) => {
				state.status = 'fulfilled'
				state.categories = action.payload
				state.error = null
			}
		)

		builder.addCase(
			fetchCategories.rejected,
			(state: MenuState, action: any) => {
				state.status = 'failed'
				state.categories = []
				state.error = action.error.message
			}
		)
	},
})

export default menuSlice.reducer
