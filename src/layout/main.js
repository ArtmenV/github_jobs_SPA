import React, { useState } from "react";
import { SearchInput } from "../components/searchInput.jsx";
import { JobsList } from "../components/JobsList";
import { PaginationButton } from "../components/PaginationButton.js";

//Главная страница нашего приложения

export function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <SearchInput currentPage={currentPage} />
      <hr />
      <JobsList />
      <PaginationButton prevPage={prevPage} nextPage={nextPage} />
    </>
  );
}
