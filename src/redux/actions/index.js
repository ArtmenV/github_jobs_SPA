import * as axios from "axios";

export const SUCCESS = "SUCCESS";
export const START = "START";

export const LOAD_JOBS = "LOAD_JOBS";

export const loadJobsAction = () => async dispatch => {
  dispatch({
    type: LOAD_JOBS + START
  });

  //CORS доставил много проблем. В 80% процентов случаем это можно решить на бэке прописав зоголовки, правда если бэк твой.
  //кучу вариантов решений было найдено,Нашел самое простое решение на стэковерфлоу использовать прокси.
  const loadJobs = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`
  );

  dispatch({
    type: LOAD_JOBS + SUCCESS,
    payload: loadJobs.data
  });
};
