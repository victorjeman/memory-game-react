import { Card } from './card'

export const CardList = ({ cards, flipCard }) => {
  return cards.map((card) => <Card key={card.id} flipCard={flipCard} card={card} />)
}
