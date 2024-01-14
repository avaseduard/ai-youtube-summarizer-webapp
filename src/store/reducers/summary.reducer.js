import { createSlice } from '@reduxjs/toolkit'

// Initial state of slice value
const initialState = { summary: '' }

// Redux store slice
export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    setSummary(state, action) {
      state.summary = action.payload
    },
  },
})

// Destructure the actions off setCart
export const { setSummary } = summarySlice.actions

// Get the reducer off the created slice
export const summaryReducer = summarySlice.reducer
