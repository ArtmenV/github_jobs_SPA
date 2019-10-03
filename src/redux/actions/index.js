import * as axios from "axios";

export const START = "START";
export const SUCCESS = "SUCCESS";

export const LOAD_ALL_JOBS = "LOAD_ALL_JOBS";
export const LOAD_FILTER_JOBS = "LOAD_FILTER_JOBS";

export const LOAD_SINGLE_FILE = "LOAD_SINGLE_FILE";

export const loadAllJobsAction = () => async dispatch => {
  dispatch({
    type: LOAD_ALL_JOBS + START
  });

  const loadAllJobs = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?"
  );
  dispatch({
    type: LOAD_ALL_JOBS + SUCCESS,
    payload: loadAllJobs.data
  });
};

export const loadJobsAction = (
  description,
  location,
  x,
  currentPage
) => async dispatch => {
  dispatch({
    type: LOAD_FILTER_JOBS + START
  });

  //CORS доставил много проблем. В 80% процентов случаем это можно решить на бэке прописав зоголовки, правда если естб доступ к бэку.
  //кучу вариантов решений было найдено, Нашел самое простое решение использовать прокси.
  const loadJobs = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}&page=${currentPage}`
  );

  dispatch({
    type: LOAD_FILTER_JOBS + SUCCESS,
    payload: loadJobs.data,
    check: x
  });
};

export const singleComponentAction = id => {
  return {
    type: LOAD_SINGLE_FILE,
    payload: id
  };
};
