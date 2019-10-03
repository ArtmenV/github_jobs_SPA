import { LOAD_JOBS, START, SUCCESS, LOAD_SINGLE_FILE } from "../actions";

const initState = {
  loading: false,
  isOpen: false,
  check: false,
  jobs: [],
  singleFile: []
};

export const JobsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_JOBS + START:
      return {
        ...state,
        loading: true
      };
    case LOAD_JOBS + SUCCESS:
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
