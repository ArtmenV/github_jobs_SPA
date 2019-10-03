import * as axios from "axios";

export const SUCCESS = "SUCCESS";
export const START = "START";

export const LOAD_JOBS = "LOAD_JOBS";

export const LOAD_SINGLE_FILE = "LOAD_SINGLE_FILE";

export const loadJobsAction = (
  description,
  location,
  x,
  currentPage
) => async dispatch => {
  dispatch({
    type: LOAD_JOBS + START
  });

  //CORS доставил много проблем. В 80% процентов случаем это можно решить на бэке прописав зоголовки, правда если бэк твой.
  //кучу вариантов решений было найдено,Нашел самое простое решение на стэковерфлоу использовать прокси.
  const loadJobs = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}&page=${currentPage}`
  );

  dispatch({
    type: LOAD_JOBS + SUCCESS,
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
