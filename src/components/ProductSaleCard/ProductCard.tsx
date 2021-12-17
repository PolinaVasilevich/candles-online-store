import React, { FC } from "react";
import CoutProduct from "../CoutProduct/CoutProduct";

export interface IProduct {
  img: string;
  name: string;
  color: string;
  price: number;
}

interface ProductSaleCardProps {
  product: IProduct;
}

const ProductSaleCard: FC<ProductSaleCardProps> = (props) => {
  const { img, name, color, price } = props.product;

  return (
    <div className="product-sale">
      <img src={img} alt={name} />
      <div>
        <h3 className="product-sale__title">{name}</h3>
        <span className="product-sale__color">{color}</span>
      </div>
      <p className="product-sale__prise">{price ? `$${price}.00` : ""}</p>
      <CoutProduct />
    </div>
  );
};

export default ProductSaleCard;
