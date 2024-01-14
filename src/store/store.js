import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root.reducer'

// Redux store
export const store = configureStore({
  reducer: rootReducer,
})