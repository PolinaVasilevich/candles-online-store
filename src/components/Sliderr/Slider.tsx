import React, { FC, useState } from "react";
import classnames from "classnames";

import arrowIcon from "../../assets/arrows/arrow-button-icons.png";

import { ISliderData } from "../../types/types";
import ProductInfoCard from "../ProductInfoCard/ProductInfoCard";

interface SliderProps {
  sliderData: ISliderData[];
  isDots?: boolean;
}

const Slider: FC<SliderProps> = (props) => {
  const [sliderIndex, setSliderIndex] = useState(1);

  const prevSlider = () => {
    if (sliderIndex === 1) {
      return setSliderIndex(props.sliderData.length);
    }

    setSliderIndex(sliderIndex - 1);
  };

  const nextSlider = () => {
    if (sliderIndex === props.sliderData.length) {
      return setSliderIndex(1);
    }

    setSliderIndex(sliderIndex + 1);
  };

  const changeSlider = (index: number) => {
    return () => {
      setSliderIndex(index);
    };
  };

  return (
    <div className="slider-wrapper">
      <div className="slider">
        {props.sliderData.map(({ img, title, text, colorCard }, index) => (
          <div
            key={index}
            className={classnames("slider__item", {
              "show-slider": sliderIndex === index + 1,
            })}
          >
            <div className="product-card">
              <div className="product-card__img">
                <img src={img} alt={title} />
              </div>
              <ProductInfoCard
                title={title}
                text={text}
                colorCard={colorCard}
              />
              {props.isDots ? (
                <div className="slider__dots-container">
                  <div className="slider__dots">
                    {Array(props.sliderData.length)
                      .fill(0)
                      .map((_, index) => (
                        <div
                          key={index}
                          className={classnames("slider__dot", {
                            "active-slider": sliderIndex === index + 1,
                          })}
                          onClick={changeSlider(index + 1)}
                        ></div>
                      ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="slider__btns">
        <button onClick={prevSlider} disabled={sliderIndex === 1}>
          <div
            className={`arrow-slider arrow-top ${
              sliderIndex === 1 ? "disabled" : ""
            }`}
            style={{ backgroundImage: `url(${arrowIcon})` }}
          ></div>
        </button>
        <button
          onClick={nextSlider}
          disabled={sliderIndex === props.sliderData.length}
        >
          <div
            className={`arrow-slider ${
              sliderIndex === props.sliderData.length ? "disabled" : ""
            }`}
            style={{ backgroundImage: `url(${arrowIcon})` }}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
