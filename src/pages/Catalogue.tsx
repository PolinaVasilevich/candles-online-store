import React, { FC, useMemo, useState } from "react";
import ProductPagination from "../components/ProductPagination/ProductPagination";
import ProductsList from "../components/ProductsList/ProductsList";
import { filters, popularProducts } from "../data/data";
import { usePagination } from "../hooks/usePagination";

const Catalogue: FC = () => {
  const { currentPage, prevPage, nextPage, changePage } = usePagination();
  const [activeFilter, setActiveFilter] = useState(() => filters[0].name);

  const filteredData = useMemo(() => {
    if (activeFilter === "all") {
      return popularProducts;
    } else {
      return popularProducts.filter(
        (item) =>
          item.filter.toLocaleLowerCase() === activeFilter.toLocaleLowerCase()
      );
    }
  }, [activeFilter]);

  const paginationData = useMemo(() => {
    return filteredData.slice((currentPage - 1) * 9, currentPage * 9);
  }, [filteredData]);

  const countPages = Math.ceil(filteredData.length / 9);

  const filterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <div className="catalogue">
        <div className="catalogue__filters filters">
          <h3 className="filters__title">FRAGRANCE TYPE</h3>
          <div className="filters__box">
            {filters.map((filter, index) => (
              <div className="filter" key={index}>
                <div
                  className={`filter__checkbox ${
                    activeFilter === filter.name ? "active-checkbox" : ""
                  }`}
                  onClick={() => filterChange(filter.name)}
                ></div>
                <p className="filter__name">
                  {filter.name} ({filter.count})
                </p>
              </div>
            ))}
          </div>
        </div>
        <ProductsList data={paginationData} />
      </div>
      <ProductPagination
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        changePage={changePage}
        countPages={countPages}
      />
    </div>
  );
};

export default Catalogue;
