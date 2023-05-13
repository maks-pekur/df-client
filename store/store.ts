import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import { cartApi } from './services/CartService'
import { menuApi } from './services/MenuService'
import { storiesApi } from './services/StoriesService'

const rootReducer = combineReducers({
	cart: cartReducer,
	[cartApi.reducerPath]: cartApi.reducer,
	[menuApi.reducerPath]: menuApi.reducer,
	[storiesApi.reducerPath]: storiesApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			cartApi.middleware,
			menuApi.middleware,
			storiesApi.middleware
		),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
