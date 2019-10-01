import React, { useEffect } from "react";
import { loadJobsAction } from "../redux/actions/index.js";
import { JobItem } from "./JobItem.js";
import { useDispatch, useSelector } from "react-redux";
import "./JobsList.scss";

export const JobsList = () => {
  const jobsList = useSelector(state => state.JobsReducer.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadJobsAction());
  }, []);

  return (
    <div className="container justify-content-center col-md-10">
      <ul className="jobs__list">
        {jobsList.map(job => {
          return (
            <li key={job.id}>
              <JobItem job={job} />
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
