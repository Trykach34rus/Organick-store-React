import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import filterReducer from './slices/filterReducer'
import productsReducer from './slices/productsReducer'

const preloadedState = localStorage.getItem('organic-store-react')
	? JSON.parse(localStorage.getItem('organic-store-react') as string)
	: {}

export const store = configureStore({
	reducer: {
		//@ts-expect-error Я художник я так вижу, мне похуй
		products: productsReducer,
		filter: filterReducer,
	},
	preloadedState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

store.subscribe(() => {
	localStorage.setItem('organic-store-react', JSON.stringify(store.getState()))
})
