import React, { FC } from "react";
import ProductInfoCard from "../ProductInfoCard/ProductInfoCard";

interface ProductCardProps {
  title: string;
  text: string;
  colorCard: string;
  img: string;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={props.img} alt={props.title} />
      </div>
      <ProductInfoCard
        title={props.title}
        text={props.text}
        colorCard={props.colorCard}
      />
    </div>
  );
};

export default ProductCard;
