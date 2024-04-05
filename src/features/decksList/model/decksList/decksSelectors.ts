import { RootState } from '@/services/store'

export const minCardsSelector = (state: RootState): number => state.decksList.minCardsCount
export const maxCardsSelector = (state: RootState): number => state.decksList.maxCardsCount
