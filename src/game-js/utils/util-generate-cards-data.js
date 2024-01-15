import { nanoid } from 'nanoid'

export const utilGenerateCardsFromEmojis = (emojis) => {
  return emojis.map((emoji) => ({
    id: nanoid(),
    isMatched: false,
    isFlipped: false,
    emoji,
  }))
}
