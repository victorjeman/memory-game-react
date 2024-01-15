export const utilShuffleArray = (array) => {
  const shuffledArray = [...array]

  for (let index = shuffledArray.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1))

    const currentItem = shuffledArray[index]
    const randomItem = shuffledArray[randomIndex]

    shuffledArray[index] = randomItem
    shuffledArray[randomIndex] = currentItem
  }

  return shuffledArray
}
