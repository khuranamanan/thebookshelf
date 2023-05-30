import { createContext, useReducer } from "react";
import { orderInitialValue, orderReducer } from "../Reducers/orderReducer";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [state, orderDispatch] = useReducer(orderReducer, orderInitialValue);

  return (
    <OrderContext.Provider
      value={{
        orderDispatch,
        priceDetails: state.priceDetails,
        orderAddress: state.orderAddress,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
