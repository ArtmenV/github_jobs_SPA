import React, { useEffect } from "react";
import { loadJobsAction } from "../redux/actions/index.js";
import { JobItem } from "./JobItem.js";
import { useDispatch, useSelector } from "react-redux";

export const JobsList = () => {
  const jobsList = useSelector(state => state.JobsReducer.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadJobsAction());
  }, []);

  return (
    <ul>
      {jobsList.map(job => {
        return <JobItem job={job} />;
      })}
    </ul>
  );
};
