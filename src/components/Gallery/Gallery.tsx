import React, { FC } from "react";
import { Link } from "react-router-dom";

import { RouteNames } from "../../router";
import MainButton from "../MainButton/MainButton";
import Title from "../Title/Title";

interface GalleryProps {
  images: string[];
}

const Gallery: FC<GalleryProps> = (props) => {
  return (
    <div className="gallery">
      <Title>Our instagram</Title>
      <div className="gallery__wrapper">
        {props.images.map((image, index) => (
          <img
            src={image}
            key={index}
            className="gallery__image"
            alt="candle"
          />
        ))}
        <Link to={RouteNames.ABOUT}>
          <MainButton title="about us" />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
