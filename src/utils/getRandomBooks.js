export function getRandomBooks(array, count) {
  // Shuffle the array
  const shuffledArray = array.sort(() => Math.random() - 0.5);

  // Get the specified number of elements from the shuffled array
  const randomElements = shuffledArray.slice(0, count);

  return randomElements;
}
