import axios from 'axios';

// action types
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

// action creators
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
};


export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_FAIL, payload: err }));
    
};


export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: id }))
    .catch(err => dispatch({ type: DELETE_SMURF_FAIL, payload: err }));
};
