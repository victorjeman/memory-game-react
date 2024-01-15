import { utilGetFlippedCardsInfo } from './util-get-flipped-cards-info'

/**
 * TIPS
 *
 * [TIP 1] The cards being objects we can change them by reference
 * and the changes will be reflected in the clonedCards array.
 *
 * [TIP 2] Visually the matched cards will have the same design as the flipped cards
 *
 * [TIP 3] The cards are flipped back no matter what
 *
 * [TIP 4] It would be good to have a separate function that flips back all the unmatched cards.
 * We would call that function outside of this method
 */

export const utilMatchAndGetUpdatedCards = (cards) => {
  const clonedCards = [...cards]

  const { firstFlippedCard, secondFlippedCard, flippedCardsMatched } =
    utilGetFlippedCardsInfo(clonedCards)

  if (flippedCardsMatched) {
    // [TIP 1, TIP 2]
    firstFlippedCard.isMatched = true
    secondFlippedCard.isMatched = true
  }

  // [TIP 3, TIP 4]
  firstFlippedCard.isFlipped = false
  secondFlippedCard.isFlipped = false

  return clonedCards
}
