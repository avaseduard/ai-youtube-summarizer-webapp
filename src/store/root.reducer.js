import { combineReducers } from '@reduxjs/toolkit'
import { summaryReducer } from './reducers/summary.reducer'
import { thumbnailReducer } from './reducers/thumbnail.reducer'
import { titleReducer } from './reducers/title.reducer'
import { transcriptionsReducer } from './reducers/transcriptions.reducer'

// Use the combineReducers method to combine all reducers into a general one; they keys are the name of the reducer slice and the value is the actual reducer function
export const rootReducer = combineReducers({
  summary: summaryReducer,
  title: titleReducer,
  thumbnail: thumbnailReducer,
  transcriptions: transcriptionsReducer,
})
