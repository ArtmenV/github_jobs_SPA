import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { loadJobsAction } from "../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

export const JobItem = ({ job }) => {
  return (
    <li>
      <NavLink>
        <h3>{job.title}</h3>
      </NavLink>
      <span>{job.location}</span>
    </li>
  );
};
