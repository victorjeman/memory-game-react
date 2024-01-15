export const utilFlipAndGetUpdatedCards = ({ cards, cardToFlip }) => {
  const clonedCards = [...cards]

  function flipCard(card) {
    if (card.id !== cardToFlip.id) return card

    return {
      ...card,
      isFlipped: true,
    }
  }

  return clonedCards.map(flipCard)
}
