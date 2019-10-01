import React from "react";
import "./searchInput.scss";

export const SearchInput = () => {
  return (
    <form className="jumbotron-fluid">
      <div className="form-group container">
        <div className="form__container">
          <label htmlFor="Description">Description</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Поиск"
          />
        </div>
        <div className="form__container">
          <label htmlFor="Description">Description</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Поиск"
          />
        </div>

        <div className="frm-check-radio-button ">
          <label className="form-check-label" htmlFor="defaultCheck1"></label>
          <div className="form__container_checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Full Time Only
            </label>
            <button type="submit" className="btn btn-primary btn-search">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
