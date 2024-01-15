export const utilGetFlippedCardsInfo = (cards) => {
  const clonedCards = [...cards]

  const firstFlippedCard = clonedCards.find((card) => card.isFlipped && !card.isMatched)
  const secondFlippedCard = clonedCards.find(
    (card) => card.isFlipped && !card.isMatched && card.id !== firstFlippedCard.id,
  )

  const flippedCardsMatched = firstFlippedCard?.emoji === secondFlippedCard?.emoji

  return {
    firstFlippedCard,
    secondFlippedCard,
    flippedCardsMatched,
  }
}
