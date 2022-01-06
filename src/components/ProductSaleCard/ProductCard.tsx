import React, { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../router";
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
      <Link to={`product/${name}`}>
        <img src={img} alt={name} />
      </Link>

      <div className="product-sale__text-container">
        <h3 className="product-sale__title">{name}</h3>
        <span className="product-sale__color">{color}</span>
      </div>
      <p className="product-sale__prise">{price ? `$${price}.00` : ""}</p>
      <CoutProduct />
    </div>
  );
};

export default ProductSaleCard;
