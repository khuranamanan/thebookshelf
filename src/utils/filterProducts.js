function filterProducts(data, filters, mostExpensiveProduct) {
  const filterBySearch = filters.searchKey
    ? data.filter(
        ({ title }) =>
          title.toLowerCase().indexOf(filters.searchKey.toLowerCase()) !== -1
      )
    : data;

  const filterByPriceRange =
    filters.priceSlider !== mostExpensiveProduct
      ? filterBySearch.filter(
          ({ price }) => Number(price) <= Number(filters.priceSlider)
        )
      : filterBySearch;

  const filterByCategories =
    filters.selectedCategories.length !== 0
      ? filterByPriceRange.filter(({ category }) =>
          category.some((checkCategory) =>
            filters.selectedCategories.includes(checkCategory)
          )
        )
      : filterByPriceRange;

  const filterByRating = filters.ratingFilter
    ? filterByCategories.filter(({ rating }) => rating >= filters.ratingFilter)
    : filterByCategories;

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
