import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadJobsAction } from "../redux/actions/index.js";

export const SearchInput = () => {
  const [valueDescription, useValueDescription] = useState("");
  const [valueLocation, useValueLocation] = useState("");
  const dispatch = useDispatch();

  const valueInput = e => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useValueDescription(e.target.value);
  };

  const handleFormValue = e => {
    e.preventDefault();
    dispatch(loadJobsAction(valueDescription, valueLocation));
    console.log(valueDescription, valueLocation);
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
            onChange={valueInput}
          />
        </div>
        <div className="form__container flex-grow-1 m-2">
          <label htmlFor="Description">Location</label>
          <input
            className="form-control"
            placeholder="Los Angeles"
            value={valueLocation}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            onChange={e => useValueLocation(e.target.value)}
          />
        </div>

        <div className="frm-check-radio-button m-3 align-self-right">
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
