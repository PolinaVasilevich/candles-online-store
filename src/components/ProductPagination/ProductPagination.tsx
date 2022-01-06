import React, { FC } from "react";
import classnames from "classnames";

import arrowIconRight from "../../assets/arrows/arrowIconRight.png";

interface IProductPaginationProps {
  countPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
  changePage: (index: number) => void;
}

const ProductPagination: FC<IProductPaginationProps> = (props) => {
  const { currentPage, countPages, prevPage, nextPage, changePage } = props;

  return (
    <div className="products-list__btns">
      <button onClick={prevPage} disabled={currentPage === 1}>
        <div
          style={{ backgroundImage: `url(${arrowIconRight})` }}
          className={`arrow arrow-product-slider arrow-left ${
            currentPage === 1 ? "disabled" : ""
          }`}
        ></div>
      </button>

      <div className="products-list__dots-container">
        <div className="products-list__dots dots">
          {Array(countPages)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={classnames("dots__item", {
                  "active-page": currentPage === index + 1,
                })}
                onClick={() => changePage(index + 1)}
              ></div>
            ))}
        </div>
      </div>

      <button onClick={nextPage} disabled={currentPage === countPages}>
        <div
          style={{ backgroundImage: `url(${arrowIconRight})` }}
          className={`arrow arrow-product-slider ${
            currentPage === countPages ? "disabled" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ProductPagination;
