export const utilPickRandomItems = ({ array, amount }) => {
  const clonedArray = [...array]
  const randomItems = []

  for (let index = 0; index < amount; index++) {
    const randomIndex = Math.floor(Math.random() * clonedArray.length)
    const randomItem = clonedArray[randomIndex]

    randomItems.push(randomItem)
    clonedArray.splice(randomIndex, 1)
  }

  return randomItems
}
