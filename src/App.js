import React, { useState } from "react";
import { Navbar } from "./components/navbar";
import { SearchInput } from "./components/searchInput.jsx";
import styles from "./App.scss";
import { JobsList } from "./components/JobsList";
import { PaginationButton } from "./components/PaginationButton.js";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className={styles.main__app}>
        <Navbar />
        <SearchInput currentPage={currentPage} />
        <hr />
        <JobsList />
        <PaginationButton prevPage={prevPage} nextPage={nextPage} />
      </div>
    </>
  );
}

export default App;
