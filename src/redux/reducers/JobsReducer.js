import {
  START,
  SUCCESS,
  LOAD_SINGLE_FILE,
  LOAD_ALL_JOBS,
  LOAD_FILTER_JOBS
} from "../actions";

const initState = {
  loading: false,
  isOpen: false,
  check: false,
  jobs: [],
  singleFile: []
};

//Главный Reducer здесь логика довольна проста, приняли данные и что-то с ними сделали.
//LOAD_FILTER_JOBS + SUCCESS => здесь я фильтрую массив по Full Time.

export const JobsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_ALL_JOBS + START:
      return {
        ...state,
        loading: true
      };
    case LOAD_ALL_JOBS + SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload
      };
    case LOAD_FILTER_JOBS + START:
      return {
        ...state,
        loading: true
      };
    case LOAD_FILTER_JOBS + SUCCESS:
      return {
        ...state,
        loading: false,
        check: action.check,
        jobs:
          action.check === true
            ? action.payload.filter(item => item.type === "Full Time")
            : action.payload
      };
    case LOAD_SINGLE_FILE:
      return {
        ...state,
        isOpen: true,
        singleFile: state.jobs.filter(job => job.id === action.payload)
      };
    default:
      return state;
  }
};
