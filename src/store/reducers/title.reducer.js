import { createSlice } from '@reduxjs/toolkit'

// Initial state of slice value
const initialState = { title: '' }

// Redux store slice
export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload
    },
  },
})

// Destructure the actions off setCart
export const { setTitle } = titleSlice.actions

// Get the reducer off the created slice
export const titleReducer = titleSlice.reducer
