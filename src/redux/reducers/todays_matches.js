// action types
import { GET_TODAYS_MATCHES, GET_TODAYS_MATCHES_FAILURE, GET_TODAYS_MATCHES_SUCCESS } from '../constants';

// reducer with initial state
const initialState = {
  fetching: false,
  matches: [],
  error: null
};


export default (state = initialState, {type, matches, error})  => {
  switch (type) {
    case GET_TODAYS_MATCHES:
      return { ...state, fetching: true, error: null };
    case GET_TODAYS_MATCHES_SUCCESS:
      return { ...state, fetching: false, matches };
    case GET_TODAYS_MATCHES_FAILURE:
      return { ...state, fetching: false, matches: [], error: error };
    default:
      return state;
  }
};

