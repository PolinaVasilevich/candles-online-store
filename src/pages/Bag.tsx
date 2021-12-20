import React, { FC } from "react";
import BagForm from "../components/BagForm/BagForm";
import OrderCard from "../components/OrderCard/OrderCard";

import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";
import MainButton from "../components/MainButton/MainButton";

const Bag: FC = () => {
  const orders = [
    {
      img: slider1,
      name: "name",
      color: "white",
      price: 20,
      count: 3,
    },

    {
      img: slider2,
      name: "name",
      color: "white",
      price: 20,
      count: 1,
    },

    {
      img: slider3,
      name: "name",
      color: "white",
      price: 20,
      count: 2,
    },
  ];

  return (
    <div className="main-wrapper">
      <div className="bag">
        <div>
          <h2>{"contact information".toLocaleUpperCase()}</h2>
          <BagForm />
        </div>

        <div className="order-info">
          <div className="order-info__content">
            <h2>{"order information".toLocaleUpperCase()}</h2>
            <li>
              {orders.map((order) => (
                <li key={order.name}>
                  <OrderCard {...order} />
                </li>
              ))}
            </li>
          </div>

          <div className="order-info__wrapper">
            <div className="order-info__total">
              <p>
                <h3>Subtotal:</h3>
                <span>{`$${orders[0].price}`}</span>
              </p>

              <p>
                <h3>Shipping:</h3>
                <span>{`$8`}</span>
              </p>
            </div>
            <p>
              <h3>{"total: ".toLocaleUpperCase()}</h3>
              <span>{`$${orders[0].price}`}</span>
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "200px", margin: "3rem auto" }}>
        <MainButton title="continue" />
      </div>
    </div>
  );
};

export default Bag;
