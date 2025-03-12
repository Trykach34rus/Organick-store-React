import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface FilterState {
	searchValue: string
}
const initialState: FilterState = {
	searchValue: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		handleSearch: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload
		},
	},
})

export const { handleSearch } = filterSlice.actions
export default filterSlice.reducer
