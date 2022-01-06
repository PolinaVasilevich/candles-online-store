import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const changePage = (index: number) => {
    setCurrentPage(index);
  };

  return { currentPage, nextPage, prevPage, changePage };
};
