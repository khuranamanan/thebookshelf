function expensiveBookInCollection(data) {
  return data.reduce(
    (result, book) => (result < book.price ? book.price : result),
    0
  );
}

export { expensiveBookInCollection };
