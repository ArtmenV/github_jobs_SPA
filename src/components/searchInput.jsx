import React from "react";
import "./searchInput.scss";

export const SearchInput = () => {
  return (
    <form className="container col-md-8">
      <div className=" d-flex m-2 form-group container">
        <div className="form__container flex-grow-1 m-2">
          <label htmlFor="Description">Job Description</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="python"
          />
        </div>
        <div className="form__container flex-grow-1 m-2">
          <label htmlFor="Description">Location</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Los Angeles"
          />
        </div>

        <div className="frm-check-radio-button m-3 align-self-right">
          <label className="form-check-label" htmlFor="defaultCheck1"></label>
          <div className="d-flex align-items-center justify-content-end">
            <input
              className="align-self-center m-2"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Full Time Only
            </label>
            <button
              type="submit"
              className="btn btn-primary btn-search ml-2 align-self-right"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
