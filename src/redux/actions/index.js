import * as axios from "axios";

export const START = "START";
export const SUCCESS = "SUCCESS";

export const LOAD_ALL_JOBS = "LOAD_ALL_JOBS";
export const LOAD_FILTER_JOBS = "LOAD_FILTER_JOBS";

export const LOAD_SINGLE_FILE = "LOAD_SINGLE_FILE";

//В экшене для асинхронных запросов использую middleware redux-thunk.
//Проблемы с CORS решил при помощи Proxy.

//Прошу заметить я изменил логику проверки full time job. Можно было сделать как показано в API,
//но я пошел дальше и вынес логику в Reducer, там использую filter и тернарный оператор я фильтрую собственноручно и вывожу результат.

export const loadAllJobsAction = currentPage => async dispatch => {
  dispatch({
    type: LOAD_ALL_JOBS + START
  });

  const loadAllJobs = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${currentPage}`
  );
  dispatch({
    type: LOAD_ALL_JOBS + SUCCESS,
    payload: loadAllJobs.data
  });
};

export const loadJobsAction = (description, location, x) => async dispatch => {
  dispatch({
    type: LOAD_FILTER_JOBS + START
  });

  const loadJobs = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
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
