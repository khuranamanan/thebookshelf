import { ACTION_TYPES } from "../utils/constant";

export const initialState = {
  products: { isLoading: false, isError: null, data: [] },
  categories: { isLoading: false, isError: null, data: [] },
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

    default:
      return state;
  }
}
