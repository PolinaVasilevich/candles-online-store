import React, { FC, useMemo } from "react";

import Slider from "../components/Sliderr/Slider";

import { popularProducts, sliderData } from "../data/data";

import { usePagination } from "../hooks/usePagination";
import ProductPagination from "../components/ProductPagination/ProductPagination";
import ProductsList from "../components/ProductsList/ProductsList";

const Collections: FC = () => {
  const { currentPage, prevPage, nextPage, changePage } = usePagination();

  const data = useMemo(() => {
    return popularProducts.slice((currentPage - 1) * 5, currentPage * 5);
  }, [currentPage]);

  const countDots = Math.ceil(popularProducts.length / 5);

  return (
    <div className="collections">
      <Slider sliderData={sliderData} isDots />
      <ProductsList data={data} />
      <ProductPagination
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        changePage={changePage}
        countPages={countDots}
      />
    </div>
  );
};

export default Collections;
