import { LOAD_JOBS, START, SUCCESS } from "../actions";

const initState = {
  loading: false,
  check: false,
  jobs: []
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
    default:
      return state;
  }
};
