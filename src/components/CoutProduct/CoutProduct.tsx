import React, { FC, useState } from "react";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

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
        <button onClick={minusProduct}>
          <IoChevronBack />
        </button>
        <input
          value={count}
          type="number"
          min={1}
          onChange={(e) => setCount(+e.target.value)}
          onKeyUp={(e) => keyup(e)}
        />
        <button onClick={plusProduct}>
          <IoChevronForward />
        </button>
      </div>
      <button className="count-product__button-add">Add</button>
    </div>
  );
};

export default CoutProduct;
