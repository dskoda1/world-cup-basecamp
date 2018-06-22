import { combineReducers } from "redux";

import { GET_MATCHES, GET_MATCHES_FAILURE, GET_MATCHES_SUCCESS } from '../constants';
import todaysMatches from './todays_matches';

const initialState = {
  fetching: false,
  matches: [],
  error: null
};


const reducer = (state = initialState, {type, matches, error})  => {
  switch (type) {
    case GET_MATCHES:
      return { ...state, fetching: true, error: null };
    case GET_MATCHES_SUCCESS:
      return { ...state, fetching: false, matches: matches };
    case GET_MATCHES_FAILURE:
      return { ...state, fetching: false, matches: [], error: error };
    default:
      return state;
  }
}


export default combineReducers({
  todaysMatches,
  reducer
})