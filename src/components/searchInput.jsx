import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadJobsAction } from "../redux/actions/index.js";

export const SearchInput = () => {
  const [valueDescription, setValueDescription] = useState("");
  const [valueLocation, setValueLocation] = useState("");
  const [x, setX] = useState(false);
  const dispatch = useDispatch();

  const handler = () => {
    setX(!x);
  };

  const valueInput1 = e => {
    setValueDescription(e.target.value);
  };

  const valueInput2 = e => {
    setValueLocation(e.target.value);
  };

  const handleFormValue = e => {
    e.preventDefault();
    dispatch(loadJobsAction(valueDescription, valueLocation, x));
  };

  return (
    <form onSubmit={handleFormValue} className="container col-md-8">
      <div className=" d-flex m-2 form-group container">
        <div className="form__container flex-grow-1 m-2">
          <label htmlFor="Description">Job Description</label>
          <input
            className="form-control"
            placeholder="python"
            value={valueDescription}
            onChange={valueInput1}
          />
        </div>
        <div className="form__container flex-grow-1 m-2">
          <label htmlFor="Description">Location</label>
          <input
            className="form-control"
            placeholder="Los Angeles"
            value={valueLocation}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            onChange={valueInput2}
          />
        </div>

        <div className="frm-check-radio-button d-flex flex-wrap align-content-end p-2">
          <div className="d-flex flex-wrap align-content-center mr-auto">
            <input
              className=" m-2"
              type="checkbox"
              checked={x}
              onChange={handler}
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
