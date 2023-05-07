import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './features/cartSlice'
import menuReducer from './features/menuSlice'

export const store = configureStore({
	reducer: {
		cart: CartReducer,
		menu: menuReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
