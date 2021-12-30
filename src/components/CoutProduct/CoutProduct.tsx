import React, { FC, useState } from "react";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import arrow from "../../assets/arrows/smlArrow.png";

const CoutProduct: FC = () => {
  const [count, setCount] = useState(1);

  const keyup = (e: any) => {
    if (parseInt(e.target.value) < 1) {
      e.target.value = 1;
      return false;
    }
  };

  const plusProduct = () => {
    setCount(count + 1);
  };

  const minusProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count-product">
      <div className="count-product__input">
        <button onClick={minusProduct} disabled={count === 1}>
          <img
            src={arrow}
            alt="arrow left"
            className={count === 1 ? "disabled" : ""}
          />
        </button>
        <input
          value={count}
          type="number"
          min={1}
          onChange={(e) => setCount(+e.target.value)}
          onKeyUp={(e) => keyup(e)}
        />
        <button onClick={plusProduct}>
          <img src={arrow} alt="arrow left" className="arrow-left" />
        </button>
      </div>
      <button className="count-product__button-add">Add</button>
    </div>
  );
};

export default CoutProduct;
