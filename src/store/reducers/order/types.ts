import { IOrder } from "../../../models/IOrder";

export interface OrderState {
  orders: IOrder[];
  totalCount: number;
  totalPrice: number;
}

export enum OrderActionsEnum {
  SET_ORDER = "SET_ORDER",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  SET_TOTAL_PRICE = "SET_TOTAL_PRICE",
}

export interface SetOrderAction {
  type: OrderActionsEnum.SET_ORDER;
  payload: IOrder[];
}

export interface SetTotalCountAction {
  type: OrderActionsEnum.SET_TOTAL_COUNT;
  payload: number;
}

export interface SetTotalPriceAction {
  type: OrderActionsEnum.SET_TOTAL_PRICE;
  payload: number;
}

export type OrderAction =
  | SetOrderAction
  | SetTotalCountAction
  | SetTotalPriceAction;
