import { createSlice } from '@reduxjs/toolkit'

// Initial state of slice value
const initialState = { thumbnail: '' }

// Redux store slice
export const thumbnailSlice = createSlice({
  name: 'thumbnail',
  initialState,
  reducers: {
    setThumbnail(state, action) {
      state.thumbnail = action.payload
    },
  },
})

// Destructure the actions off setCart
export const { setThumbnail } = thumbnailSlice.actions

// Get the reducer off the created slice
export const thumbnailReducer = thumbnailSlice.reducer
