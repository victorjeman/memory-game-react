import { useEffect, useState } from 'react'

import { EMOJIS } from '../constants/constants'

import { utilPickRandomItems } from '../utils/util-pick-random-items'
import { utilGenerateCardsFromEmojis } from '../utils/util-generate-cards-data'
import { utilFlipAndGetUpdatedCards } from '../utils/util-flip-and-get-updated-cards'
import { utilMatchAndGetUpdatedCards } from '../utils/util-match-and-get-updated-cards'

import { Stats } from './stats'
import { Board } from './board'
import { Controls } from './controls'
import { CardList } from './card-list'
import { GameContainer } from './game-container'

const randomEmojis = utilPickRandomItems({ array: EMOJIS, amount: 8 })
const cardsInitialState = utilGenerateCardsFromEmojis([...randomEmojis, ...randomEmojis])

/*
 * TIPS
 *
 * [TIP 1] - There is no need to have an extra state for saving the number of flipped cards.
 * We can have a method that would check if there are two flipped cards by filtering the cards array by isFlipped attribute.
 *
 * [TIP 2] - There is no need to have an extra state for saving the gameStarted state.
 * We can use a similar approach as in [TIP 1] and check if there is at least one flipped card.
 *
 * [TIP 3] - If we click on  the same card twice we do get an error How could we fix that?
 * By implementing the first tip we could gt rid of this error.
 * At the moment we have a state for saving the number of flipped cards that is inconsistent with the actual amount of flipped cards.
 */
export const Game = () => {
  const [cards, setCards] = useState(cardsInitialState)
  const [moves, setMoves] = useState(0)

  // [TIP 1]
  const [flippedCardsCounter, setFlippedCardsCounter] = useState(0)

  // [TIP 2]
  const [gameStarted, setGameStarted] = useState(false)

  const flippedTwoCards = flippedCardsCounter === 2

  function flipCard(cardToFlip) {
    if (flippedTwoCards) return
    if (!gameStarted) setGameStarted(true)

    const updatedCards = utilFlipAndGetUpdatedCards({ cards, cardToFlip })
    setCards(updatedCards)

    setFlippedCardsCounter((prev) => prev + 1)
    setMoves((prev) => prev + 1)
  }

  function matchCards() {
    if (!flippedTwoCards) return

    const updatedCards = utilMatchAndGetUpdatedCards(cards)

    function stateUpdate() {
      setCards(updatedCards)
      setFlippedCardsCounter(0)
    }

    window.setTimeout(stateUpdate, 700)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(matchCards, [flippedTwoCards])

  return (
    <GameContainer>
      <Controls>
        <Stats moves={moves} gameStarted={gameStarted} />
      </Controls>

      <Board>
        <CardList cards={cards} flipCard={flipCard} />
      </Board>
    </GameContainer>
  )
}
