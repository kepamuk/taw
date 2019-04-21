import {ADD_STATION, GET_ALL_STATION, GET_STATION} from '../actions/types';

const initialState = {
  station: {},
  added: false,
  stations: [],
  checkStation: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STATION:
      return {
        ...state,
        station: action.payload,
        checkStation: true
      };
    case ADD_STATION:
      return {
        ...state,
        added: true,
        checkStation: false
      };
    case GET_ALL_STATION:
      return {
        ...state,
        stations: action.payload,
        checkStation: false
      };
    default:
      return state;
  }
}
