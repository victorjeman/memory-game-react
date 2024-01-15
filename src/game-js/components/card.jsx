import clsx from 'clsx'

export const Card = ({ card, flipCard }) => {
  return (
    <div
      className={clsx('card', { flipped: card.isFlipped, matched: card.isMatched })}
      onClick={() => flipCard(card)}>
      <div className="card-front">{card.emoji}</div>
      <div className="card-back">{card.emoji}</div>
    </div>
  )
}
