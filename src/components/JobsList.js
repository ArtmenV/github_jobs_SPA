import React from "react";
import { JobItem } from "./JobItem.js";
import { Loader } from "./Loader";
import { useSelector } from "react-redux";
import "./JobsList.scss";

export const JobsList = () => {
  const jobsList = useSelector(state => state.JobsReducer.jobs);
  const loading = useSelector(state => state.JobsReducer);
  const check = useSelector(state => state.JobsReducer.check);
  console.log(check);

  return loading.loading === true ? (
    <Loader />
  ) : (
    <div className="container justify-content-center col-md-10">
      <ul className="jobs__list">
        {jobsList.map(job => {
          return (
            <li className="jobs__list-item" key={job.id}>
              <JobItem job={job} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
