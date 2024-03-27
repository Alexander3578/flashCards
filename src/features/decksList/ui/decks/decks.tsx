import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { CustomSlider } from '@/components/ui/slider'
import {
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { CustomTabs } from '@/components/ui/tabs'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/features/decksList/api'

import s from './decks.module.scss'

export const DecksList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const { data } = useGetDecksQuery({ currentPage, itemsPerPage })
  const formatter1 = new Intl.DateTimeFormat('ru')

  const onChangePageHandler = (page: number) => {
    setCurrentPage(page)
  }

  const onChangePerPageHandler = (pageItems: string) => {
    setItemsPerPage(pageItems)
  }

  return (
    <div className={s.container}>
      <div className={s.addDeckWrapper}>
        <Typography as={'h1'} variant={'h1'}>
          Decks list
        </Typography>
        <Button>Add New Deck</Button>
      </div>

      <div className={s.filterDecksWrapper}>
        <TextField className={s.searchDecks} inputType={'search'} placeholder={'Input search'} />
        <CustomTabs
          defaultValue={'all-cards'}
          tabs={[
            {
              disabled: false,
              title: 'My Cards',
              value: 'my-card',
            },
            { disabled: false, title: 'All Cards', value: 'all-cards' },
          ]}
          tabsName={'Show decks cards'}
        />
        <CustomSlider max={10} min={1} sliderName={'Number of cards'} />
        <Button buttonImg={'trash'} isImg variant={'secondary'}>
          Clear Filter
        </Button>
      </div>

      <Table className={s.tableDecks}>
        <TableHead>
          <TableRow>
            <TableHeadCell>
              <Typography variant={'subtitle2'}>Name</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'subtitle2'}>Cards</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'subtitle2'}>Last Updated</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'subtitle2'}>Created by</Typography>
            </TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(deck => (
            <TableRow className={s.deckTableRow} key={deck.id}>
              <TableBodyCell>
                <Typography variant={'body2'}>{deck.name}</Typography>
              </TableBodyCell>
              <TableBodyCell>
                <Typography variant={'body2'}>{deck.cardsCount}</Typography>
              </TableBodyCell>
              <TableBodyCell>
                <Typography variant={'body2'}>
                  {formatter1.format(new Date(deck.updated))}
                </Typography>
              </TableBodyCell>
              <TableBodyCell>
                <Typography variant={'body2'}>{deck.author.name}</Typography>
              </TableBodyCell>
              <TableBodyCell className={s.deckButtonsCell}>
                <div className={s.deckButtonsWrapper}>
                  <Button as={'a'} buttonImg={'playCircle'} className={s.deckButton} isImg></Button>
                  <Button as={'a'} buttonImg={'edit2'} className={s.deckButton} isImg></Button>
                  <Button as={'a'} buttonImg={'trash'} className={s.deckButton} isImg></Button>
                </div>
              </TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {data && (
        <Pagination
          count={data.pagination.totalPages}
          onChange={onChangePageHandler}
          onPerPageChange={onChangePerPageHandler}
          page={data.pagination.currentPage}
          perPage={data.pagination.itemsPerPage.toString()}
          perPageOptions={['20', '15', '10', '5']}
        />
      )}
    </div>
  )
}
