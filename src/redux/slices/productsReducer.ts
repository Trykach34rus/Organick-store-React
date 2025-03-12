import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICartItem, IProduct } from '../../type'

interface ProductsState {
	products: IProduct[]
	cartItems: ICartItem[]
	isCartOpen: boolean
	productsLoading: boolean
	productsError: string
}
interface IProductResponse {
	products: IProduct[]
}

const initialState: ProductsState = {
	products: [],
	cartItems: [],
	isCartOpen: false,
	productsLoading: false,
	productsError: '',
}

const getProducts = createAsyncThunk<IProductResponse>(
	'products/getProducts',
	async () => {
		const response = await axios.get<IProductResponse>(
			'https://dummyjson.com/products/category/groceries'
		)
		return response.data
	}
)

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const itemInCart = state.cartItems.find(
				item => item.id === action.payload.id
			)
			if (itemInCart) {
				itemInCart.quantity += 1
			} else {
				state.cartItems.push({ ...action.payload, quantity: 1 })
			}
		},
		handleIncrease: (state, action: PayloadAction<number>) => {
			const itemInCart = state.cartItems.find(
				item => item.id === action.payload
			)
			if (itemInCart) {
				itemInCart.quantity += 1
			}
		},
		handleDecrease: (state, action: PayloadAction<number>) => {
			const itemInCart = state.cartItems.find(
				item => item.id === action.payload
			)
			if (itemInCart) {
				if (itemInCart.quantity > 1) {
					itemInCart.quantity -= 1
				} else {
					state.cartItems = state.cartItems.filter(
						item => item.id !== action.payload
					)
				}
			}
		},
		handleRemove: (state, action: PayloadAction<number>) => {
			state.cartItems = state.cartItems.filter(
				item => item.id !== action.payload
			)
		},
		setIsCartOpen: (state, action: PayloadAction<boolean>) => {
			state.isCartOpen = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(getProducts.pending, state => {
			state.productsLoading = true
		})
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.productsLoading = false
			state.productsError = ''
			const idsToRemove = [
				17, 18, 19, 20, 22, 23, 27, 28, 32, 33, 34, 36, 39, 41, 42,
			]
			const filteredProducts = action.payload.products.filter(
				(item: IProduct) => !idsToRemove.includes(item.id)
			)
			state.products = filteredProducts
		})
		builder.addCase(getProducts.rejected, state => {
			state.productsError = 'Ошибка запроса'
			state.products = []
			state.productsLoading = false
		})
	},
})

export const {
	addToCart,
	handleIncrease,
	handleDecrease,
	handleRemove,
	setIsCartOpen,
} = productsSlice.actions
export { getProducts }
export default productsSlice.reducer
