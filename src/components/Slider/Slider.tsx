import React, { FC, useState } from "react";
import classnames from "classnames";
import ProductCard from "../ProductCard/ProductCard";

import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";

import arrowTop from "../../assets/arrows/arrowTop.png";
import arrowBottom from "../../assets/arrows/arrowBottom.png";

import { IImage } from "../../types/types";

interface SliderProps {
  images: IImage[];
}

const Slider: FC<SliderProps> = (props) => {
  const [sliderIndex, setSliderIndex] = useState(1);

  const prevSlider = () => {
    if (sliderIndex === 1) {
      return setSliderIndex(props.images.length);
    }

    setSliderIndex(sliderIndex - 1);
  };

  const nextSlider = () => {
    if (sliderIndex === props.images.length) {
      return setSliderIndex(1);
    }

    setSliderIndex(sliderIndex + 1);
  };

  return (
    <div className="slider">
      {props.images.map((img, index) => (
        <div
          key={index}
          className={classnames("slider__item", {
            "show-slider": sliderIndex === index + 1,
          })}
        >
          <ProductCard
            key={index}
            title="Newest Collection SOFT"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            colorCard="var(--light-orange)"
            img={img.img}
          />
          <div className="slider__btns">
            <button onClick={prevSlider} disabled={sliderIndex === 1}>
              <img
                src={arrowTop}
                alt="arrow top"
                style={sliderIndex === 1 ? { color: "var(--main-front)" } : {}}
              />
            </button>
            <button
              onClick={nextSlider}
              disabled={sliderIndex === props.images.length}
            >
              <img
                src={arrowBottom}
                alt="arrow bottom"
                style={
                  sliderIndex === props.images.length
                    ? { color: "var(--main-front)" }
                    : {}
                }
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
