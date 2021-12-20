import React, { FC, useEffect, useMemo, useRef, useState } from "react";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ProductSaleCard, { IProduct } from "../ProductSaleCard/ProductCard";

interface SliderProductsProps {
  products: IProduct[];
}

const SliderProducts: FC<SliderProductsProps> = (props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [carouselWidth, setCarouselWidth] = useState(0);

  const [sliderIndex, setSliderIndex] = useState(0);

  const [isDisabledNextButton, setIsDisabledNextButton] = useState(false);

  useEffect(() => {
    const updateCarouselWidth = () => {
      setCarouselWidth(carouselRef.current?.offsetWidth ?? 0);
    };
    const onResize = () => {
      updateCarouselWidth();
    };

    window.addEventListener("resize", onResize);
    updateCarouselWidth();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const nextSlider = () => {
    const newSliderIndex = sliderIndex + 1;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        (carouselWidth + 27) * newSliderIndex
      }px)`;
      setSliderIndex(newSliderIndex);

      if (
        sliderRef.current.offsetWidth - newSliderIndex * carouselWidth <
        carouselWidth
      )
        setIsDisabledNextButton(true);
    }
  };

  const prevSlider = () => {
    setIsDisabledNextButton(false);
    const newSliderIndex = sliderIndex - 1;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        (carouselWidth + 27) * newSliderIndex
      }px)`;
      setSliderIndex(newSliderIndex);
    }
  };

  return (
    <div className="slider-products">
      <div className="slider-products__wrapper" ref={carouselRef}>
        <div className="slider-products__content" ref={sliderRef}>
          {props.products.map((product, index) => (
            <div className="slider" key={index}>
              <ProductSaleCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="slider-products__btns">
        <button onClick={prevSlider} disabled={sliderIndex === 0}>
          <IoArrowBack
            style={sliderIndex === 0 ? { color: "var(--main-front)" } : {}}
          />
        </button>
        <button onClick={nextSlider} disabled={isDisabledNextButton}>
          <IoArrowForward
            style={isDisabledNextButton ? { color: "var(--main-front)" } : {}}
          />
        </button>
      </div>
    </div>
  );
};

export default SliderProducts;
