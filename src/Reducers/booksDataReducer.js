import { ACTION_TYPES } from "../utils/constant";

export const initialState = {
  products: { isLoading: false, isError: null, data: [] },
  categories: { isLoading: false, isError: null, data: [] },
  filters: {
    searchKey: "",
    priceSlider: 0,
    selectedCategories: [],
    ratingFilter: "",
    sortFilter: "POPULARITY",
  },
  cart: [],
  wishlist: [],
  paginationPage: 1,
};

export function booksDataReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INITIALISE_CATEGORIES: {
      return {
        ...state,
        categories: { ...state.categories, data: action.payload },
      };
    }

    case ACTION_TYPES.INITIALISE_PRODUCTS: {
      return {
        ...state,
        products: { ...state.products, data: action.payload },
      };
    }

    case ACTION_TYPES.INITIALISE_CART: {
      return { ...state, cart: [...action.payload] };
    }

    case ACTION_TYPES.INITIALISE_WISHLIST: {
      return { ...state, wishlist: [...action.payload] };
    }

    case ACTION_TYPES.SET_IS_LOADING: {
      const propertyToTarget = action.payload.propName;

      return {
        ...state,
        [propertyToTarget]: {
          ...state[propertyToTarget],
          isLoading: action.payload.value,
        },
      };
    }

    case ACTION_TYPES.SET_IS_ERROR: {
      const propertyToTarget = action.payload.propName;

      return {
        ...state,
        [propertyToTarget]: {
          ...state[propertyToTarget],
          isError: action.payload.value,
        },
      };
    }

    case ACTION_TYPES.INITIALIZE_RANGE_FILTER: {
      return {
        ...state,
        filters: { ...state.filters, priceSlider: action.payload },
      };
    }

    case ACTION_TYPES.SEARCH_KEY_CHANGE: {
      return {
        ...state,
        filters: {
          ...state.filters,
          searchKey: action.payload.searchKey,
          priceSlider: action.payload.priceSlider,
          selectedCategories: [],
          ratingFilter: "",
          sortFilter: "POPULARITY",
        },
      };
    }

    case ACTION_TYPES.RANGE_FILTER_CHANGE: {
      return {
        ...state,
        filters: { ...state.filters, priceSlider: action.payload },
      };
    }

    case ACTION_TYPES.SELECTED_CATEGORIES_CHANGE: {
      const newSelectedCategories = state.filters.selectedCategories.includes(
        action.payload
      )
        ? state.filters.selectedCategories.filter(
            (category) => category !== action.payload
          )
        : [...state.filters.selectedCategories, action.payload];

      return {
        ...state,
        filters: {
          ...state.filters,
          selectedCategories: newSelectedCategories,
        },
      };
    }

    case ACTION_TYPES.RATING_FILTER_CHANGE: {
      return {
        ...state,
        filters: { ...state.filters, ratingFilter: action.payload },
      };
    }

    case ACTION_TYPES.SORT_FILTER_CHANGE: {
      return {
        ...state,
        filters: { ...state.filters, sortFilter: action.payload },
      };
    }

    case ACTION_TYPES.CLEAR_ALL_FILTERS: {
      return {
        ...state,
        filters: {
          searchKey: "",
          priceSlider: action.payload.rangeInitialValue,
          selectedCategories: [],
          ratingFilter: "",
          sortFilter: "POPULARITY",
        },
      };
    }

    case ACTION_TYPES.SELECTED_CATEGORY_CARD: {
      return {
        ...state,
        filters: {
          searchKey: "",
          priceSlider: action.payload.priceSlider,
          selectedCategories: [action.payload.category],
          ratingFilter: "",
          sortFilter: "POPULARITY",
        },
      };
    }

    case ACTION_TYPES.ADD_TO_CART: {
      return { ...state, cart: [...action.payload] };
    }

    case ACTION_TYPES.REMOVE_FRM_CART: {
      return { ...state, cart: [...action.payload] };
    }

    case ACTION_TYPES.UPDATE_QTY_CART: {
      return { ...state, cart: [...action.payload] };
    }

    case ACTION_TYPES.ADD_TO_WISHLIST: {
      return { ...state, wishlist: [...action.payload] };
    }

    case ACTION_TYPES.REMOVE_FROM_WISHLIST: {
      return { ...state, wishlist: [...action.payload] };
    }

    case ACTION_TYPES.CLEAR_CART: {
      return { ...state, cart: [] };
    }

    case ACTION_TYPES.CLEAR_WISHLIST: {
      return { ...state, wishlist: [] };
    }

    case ACTION_TYPES.VIEW_BESTSELLERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          searchKey: "",
          priceSlider: action.payload.priceSlider,
          selectedCategories: [],
          ratingFilter: "",
          sortFilter: "BESTSELLER_FIRST",
        },
      };
    }

    case ACTION_TYPES.SET_PRODUCTS_PAGE_NUM: {
      return { ...state, paginationPage: action.payload };
    }

    case ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM: {
      return { ...state, paginationPage: 1 };
    }

    default:
      return state;
  }
}
