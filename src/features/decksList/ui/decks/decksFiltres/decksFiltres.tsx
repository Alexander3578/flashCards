import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { CustomSlider } from '@/components/ui/slider'
import { CustomTabs } from '@/components/ui/tabs'
import { TextField } from '@/components/ui/textField'

import s from '@/features/decksList/ui/decks/decks.module.scss'

type DecksFiltresProps = {
  maxCardsCount: number
  minCardsCount: number
  onClearFilter: () => void
  onSetSearchNameHandler: (searchName: string) => void
  onSliderValueChange: (minMaxCards: [min: number, max: number]) => void
  valueName: string
}

export const DecksFilters = (props: DecksFiltresProps) => {
  const {
    maxCardsCount,
    minCardsCount,
    onClearFilter,
    onSetSearchNameHandler,
    onSliderValueChange,
    valueName,
  } = props

  const [currentSliderValue, setCurrentSliderValue] = useState([minCardsCount, maxCardsCount])
  const [searchName, setSearchName] = useState(valueName)

  const timerId = useRef<null | number>(null)

  const onClearFilterHandler = () => {
    setCurrentSliderValue([minCardsCount, maxCardsCount])
    setSearchName('')
    onClearFilter()
  }

  const onSearchNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (timerId.current !== null) {
      clearTimeout(timerId.current)
    }

    setSearchName(e.currentTarget.value)
    timerId.current = window.setTimeout(() => {
      onSetSearchNameHandler(searchName)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (timerId.current !== null) {
        clearTimeout(timerId.current)
      }
    }
  }, [])

  return (
    <div className={s.filterDecksWrapper}>
      <TextField
        className={s.searchDecks}
        inputType={'search'}
        onChange={onSearchNameHandler}
        placeholder={'Input search'}
        value={searchName}
      />
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
      <CustomSlider
        max={currentSliderValue[1]}
        min={currentSliderValue[0]}
        onValueChange={onSliderValueChange}
        sliderName={'Number of cards'}
        value={currentSliderValue}
      />
      <Button buttonImg={'trash'} isImg onClick={onClearFilterHandler} variant={'secondary'}>
        Clear Filter
      </Button>
    </div>
  )
}
