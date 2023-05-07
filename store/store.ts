import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './features/cartSlice'
import menuReducer from './features/menuSlice'
import modalReducer from './features/modalSlice'

export const store = configureStore({
	reducer: {
		cart: CartReducer,
		menu: menuReducer,
		modal: modalReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
