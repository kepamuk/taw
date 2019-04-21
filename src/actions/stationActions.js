import axios from 'axios';

import {ADD_STATION, GET_ALL_STATION, GET_STATION} from './types';

export const getStation = station => dispatch => {
  axios
    .get(`stations/${station}`)
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_STATION,
        payload: res.data
      })
    })
    .catch(err =>
      console.log(err)
    );
};

export const addStation = station => dispatch => {
  console.log(station)
  axios
    .post('locations/d1c38c43-79e0-47e0-a77c-4d87f23cc205/stations',
      {serial_number: station}
    )
    .then(res => {
      console.log(res)
      dispatch({
        type: ADD_STATION,
        payload: res.data
      })
    })
    .catch(err =>
      console.log(err)
    );
};

export const getAllStation = () => dispatch => {
  axios
    .get(`locations/d1c38c43-79e0-47e0-a77c-4d87f23cc205/stations`)
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_ALL_STATION,
        payload: res.data
      })
    })
    .catch(err =>
      console.log(err)
    );
};