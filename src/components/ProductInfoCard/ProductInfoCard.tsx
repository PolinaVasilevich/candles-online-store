import React, { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../router";
import MainButton from "../MainButton/MainButton";

interface ProductInfoCardProps {
  title: string;
  text: string;
  colorCard: string;
  widthBlock?: string;
}

const ProductInfoCard: FC<ProductInfoCardProps> = (props) => {
  return (
    <div
      className="product-info"
      style={{ background: props.colorCard, width: props.widthBlock }}
    >
      <div className="product-info__text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <Link to={RouteNames.COLLECTIONS}>
        <MainButton title="see collection" />
      </Link>
    </div>
  );
};

export default ProductInfoCard;
