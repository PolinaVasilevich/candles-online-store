import React, { FC } from "react";

import ProductSaleCard from "../ProductSaleCard/ProductCard";

interface IProductsListProps {
  data: any[];
}

const ProductsList: FC<IProductsListProps> = (props) => {
  return (
    <div className="products-list">
      <div className="products-list__products-wrapper">
        <div className="products-list__products products">
          {props.data.map((product, index) => (
            <div className="products__item" key={index}>
              <ProductSaleCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
