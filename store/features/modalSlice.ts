import { IMenuItem } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
	isOpen: boolean
	data: IMenuItem | null
}

const initialState: ModalState = {
	isOpen: false,
	data: null,
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true
			state.data = action.payload
		},
		closeModal: state => {
			state.isOpen = false
			state.data = null
		},
	},
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
