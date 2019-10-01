import React from "react";
import { Navbar } from "./components/navbar";
import { SearchInput } from "./components/searchInput.jsx";
import styles from "./App.scss";
import { JobsList } from "./components/JobsList";

function App() {
  return (
    <>
      <div className={styles.main__app}>
        <Navbar />
        <SearchInput />
        <hr />
        <JobsList />
      </div>
    </>
  );
}

export default App;
