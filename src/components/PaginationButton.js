import React from "react";

//Это две кнопки которые помогают мне получать новые данные.

export const PaginationButton = ({ prevPage, nextPage }) => {
  return (
    <div
      className="d-flex justify-content-center col-md-4"
      role="group"
      aria-label="Basic example"
    >
      <button type="button" className="btn btn-primary m-2" onClick={prevPage}>
        Prev
      </button>
      <button type="button" className="btn btn-primary m-2" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};
