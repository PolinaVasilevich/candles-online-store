import React, { FC } from "react";
import { IOrder } from "../../models/IOrder";

interface OrderCardProps {
  order: IOrder;
}

const OrderCard: FC<OrderCardProps> = (props) => {
  const { img, name, color, price, count } = props.order;
  return (
    <div className="order-card">
      <div className="order-card__info">
        <img src={img} alt={name} />
        <div>
          <h3>
            {name} {count > 1 ? `(${count})` : ""}
          </h3>
          <p>{color}</p>
        </div>
      </div>
      <p className="order-card__price">{`$${price * count}`}</p>
    </div>
  );
};

export default OrderCard;
