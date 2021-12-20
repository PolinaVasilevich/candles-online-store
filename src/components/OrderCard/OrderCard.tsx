import React, { FC } from "react";

interface OrderCardProps {
  img: string;
  name: string;
  color: string;
  price: number;
  count: number;
}

const OrderCard: FC<OrderCardProps> = (props) => {
  const { img, name, color, price, count } = props;
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
