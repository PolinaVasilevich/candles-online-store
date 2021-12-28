import { AppDispatch } from "../..";
import { IOrder } from "../../../models/IOrder";
import {
  OrderActionsEnum,
  SetOrderAction,
  SetTotalCountAction,
  SetTotalPriceAction,
} from "./types";

export const OrderActionCreators = {
  setOrder: (orders: IOrder[]): SetOrderAction => ({
    type: OrderActionsEnum.SET_ORDER,
    payload: orders,
  }),
  setTotalCount: (count: number): SetTotalCountAction => ({
    type: OrderActionsEnum.SET_TOTAL_COUNT,
    payload: count,
  }),
  setTotalPrice: (price: number): SetTotalPriceAction => ({
    type: OrderActionsEnum.SET_TOTAL_PRICE,
    payload: price,
  }),

  addOrder: (order: IOrder) => (dispatch: AppDispatch) => {},
};
