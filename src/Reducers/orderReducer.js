import { ACTION_TYPES } from "../utils/constant";

export const orderInitialValue = {
  orderAddress: {},
  priceDetails: {
    totalQuantity: 0,
    totalPrice: 0,
    discount: 0,
    deliveryCharges: 0,
    totalAmount: 0,
  },
};

export function orderReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_ORDER_DETAILS: {
      const {
        totalQuantity,
        totalPrice,
        discount,
        deliveryCharges,
        totalAmount,
      } = action.payload;
      return {
        ...state,
        priceDetails: {
          totalQuantity,
          totalPrice,
          discount,
          deliveryCharges,
          totalAmount,
        },
      };
    }

    case ACTION_TYPES.SET_ORDER_ADDRESS: {
      const newAddress = action.payload ? action.payload : {};
      return { ...state, orderAddress: newAddress };
    }

    default:
      return state;
  }
}
