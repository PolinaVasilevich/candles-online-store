import { OrderAction, OrderActionsEnum, OrderState } from "./types";

const initialState: OrderState = {
  orders: [{ img: "", name: "", color: "", price: 0, count: 0 }],
  totalCount: 0,
  totalPrice: 0,
};

export default function orderReducer(
  state = initialState,
  action: OrderAction
): OrderState {
  switch (action.type) {
    case OrderActionsEnum.SET_ORDER:
      return { ...state, orders: action.payload };

    case OrderActionsEnum.SET_TOTAL_COUNT: {
      return { ...state, totalCount: action.payload };
    }
    case OrderActionsEnum.SET_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };

    default:
      return state;
  }
}
