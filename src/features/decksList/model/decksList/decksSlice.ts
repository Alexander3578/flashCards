import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type DecksListState = ReturnType<typeof slice.getInitialState>

//REDUCER
const slice = createSlice({
  initialState: {
    maxCardsCount: 0,
    minCardsCount: 0,
  },
  name: 'decksList',
  reducers: {
    setMaxCardsCount: (state, action: PayloadAction<{ max: number }>) => {
      state.maxCardsCount = action.payload.max
    },
    setMinCardsCount: (state, action: PayloadAction<{ min: number }>) => {
      state.minCardsCount = action.payload.min
    },
  },
})

export const decksListReducer = slice.reducer
export const decksListActions = slice.actions
