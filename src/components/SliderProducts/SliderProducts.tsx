import React, { FC, useEffect, useMemo, useRef, useState } from "react";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ProductSaleCard, { IProduct } from "../ProductSaleCard/ProductCard";

interface SliderProductsProps {
  products: IProduct[];
}

const SliderProducts: FC<SliderProductsProps> = (props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  let step = 0;

  useEffect(() => {
    if (sliderRef.current) {
      setCarouselWidth(sliderRef.current.offsetWidth);
    }
  }, []);

  const nextSlider = () => {
    step++;
    if (sliderRef.current) {
      console.log(carouselWidth * step);
      sliderRef.current.style.transform = `translateX(-${1080}px)`;
    }
  };

  const prevSlider = () => {
    step--;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        carouselWidth * step
      }px)`;
    }
  };

  return (
    <div className="slider-products">
      <div className="slider-products__inner">
        <div className="slider-products__content">
          {props.products.map((product, index) => (
            <div className="slider" key={index} ref={sliderRef}>
              <ProductSaleCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="slider-products__btns">
        <button onClick={prevSlider}>
          <IoArrowBack />
        </button>
        <button onClick={nextSlider}>
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default SliderProducts;
