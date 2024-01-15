import { createSlice } from '@reduxjs/toolkit'

// Initial state of slice value
const initialState = { transcriptions: [] }

// Redux store slice
export const transcriptionsSlice = createSlice({
  name: 'transcriptions',
  initialState,
  reducers: {
    setTranscriptions(state, action) {
      state.transcriptions = action.payload
    },
  },
})

// Destructure the actions off setCart
export const { setTranscriptions } = transcriptionsSlice.actions

// Get the reducer off the created slice
export const transcriptionsReducer = transcriptionsSlice.reducer
