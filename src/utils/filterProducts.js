function filterProducts(data, filters, mostExpensiveProduct) {
  const filterByPriceRange =
    filters.priceSlider !== mostExpensiveProduct
      ? data.filter(({ price }) => Number(price) <= Number(filters.priceSlider))
      : data;

  const filterByCategories =
    filters.selectedCategories.length !== 0
      ? filterByPriceRange.filter(({ category }) =>
          category.some((checkCategory) =>
            filters.selectedCategories.includes(checkCategory)
          )
        )
      : filterByPriceRange;

  const filterByRating =
    filters.ratingFilter === "All"
      ? filterByCategories
      : filterByCategories.filter(
          ({ rating }) => rating >= filters.ratingFilter
        );

  let sortedResult;

  switch (filters.sortFilter) {
    case "POPULARITY":
      sortedResult = filterByRating;
      break;

    case "BESTSELLER_FIRST":
      sortedResult = filterByRating.sort((a, b) => {
        if (a.isBestSeller && !b.isBestSeller) {
          return -1;
        } else if (!a.isBestSeller && b.isBestSeller) {
          return 1;
        } else {
          return 0;
        }
      });
      break;

    case "LOW_TO_HIGH":
      sortedResult = filterByRating.sort((a, b) => a.price - b.price);
      break;

    case "HIGH_TO_LOW":
      sortedResult = filterByRating.sort((a, b) => b.price - a.price);
      break;

    default:
      sortedResult = filterByRating;
      break;
  }

  return sortedResult;
}

export default filterProducts;
