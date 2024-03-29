export type ResponseGetDecks = {
  items: DecksItems[]
  pagination: DecksPagination
}
export type DecksItemsAuthor = {
  id: string
  name: string
}
export type DecksItems = {
  author: DecksItemsAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type DecksPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: string
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: OrderBy
}

export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type DeleteDeckArgs = {
  id: string
}

export type DeleteDeckResponse = Omit<DecksItems, 'author'>

export type UpdateDeckArgs = Partial<CreateDeckArgs> & DeleteDeckArgs

type OrderBy =
  | 'author.name-asc'
  | 'author.name-desc'
  | 'cardsCount-asc'
  | 'cardsCount-desc'
  | 'created-asc'
  | 'created-desc'
  | 'name-asc'
  | 'name-desc'
  | 'updated-asc'
  | 'updated-desc'
  | null
