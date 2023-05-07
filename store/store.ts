import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './features/cartSlice'
import ProductReducer from './features/productSlice'

export const store = configureStore({
	reducer: {
		cart: CartReducer,
		product: ProductReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
