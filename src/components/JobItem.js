import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleComponentAction } from "../redux/actions/index.js";
import moment from "moment";

export const JobItem = ({ job }) => {
  const time = new Date(job.created_at);
  const date = moment(time).fromNow();
  const dispatch = useDispatch();

  const singleFile = id => {
    dispatch(singleComponentAction(id));
  };

  return (
    <div className="container col-md-10">
      <div className="d-flex p-2 flex__container ">
        <div>
          <NavLink to="/idForm" onClick={() => singleFile(job.id)}>
            <h5>{job.title}</h5>
          </NavLink>
          <span>
            {job.company}&nbsp;-<strong>&nbsp;{job.type}</strong>{" "}
          </span>
        </div>
        <div className="d-flex flex-column align-self-end ml-auto text-blue">
          <span className="ml-auto"> {job.location}</span>
          <span className="ml-auto">{date}</span>
        </div>
      </div>
    </div>
  );
};
