import { LOAD_JOBS, START, SUCCESS } from "../actions";

const initState = {
  loading: false,
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
        jobs: action.payload
      };
    default:
      return state;
  }
};
