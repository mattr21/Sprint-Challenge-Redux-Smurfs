import { 
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,

  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,

  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL,
} from '../actions'

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Show smurfs
    case FETCH_SMURFS_START:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    };
  case FETCH_SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: [...state.smurfs, ...action.payload],
      fetchingSmurfs: false
    };
  case FETCH_SMURFS_FAIL:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    };

  // Add smurfs  
  case ADD_SMURF_START:
    return {
      ...state,
      addingSmurf: true,
      error: null
    };
  case ADD_SMURF_SUCCESS:
    return {
      ...state,
      notes: [...state.smurfs, ...action.payload],
      addingSmurf: false
    };
  case ADD_SMURF_FAIL:
    return {
      ...state,
      addingSmurf: false,
      error: action.payload
    };

  // Delete smurfs  
  case DELETE_SMURF_START:
    return {
      ...state,
      deletingSmurf: true,
      error: null
    };
  case DELETE_SMURF_SUCCESS:
    return {
      ...state,
      notes: state.smurfs.filter(smurf => smurf.id !== action.payload),
      deletingSmurf: false
    };
  case DELETE_SMURF_FAIL:
    return {
      ...state,
      deletingSmurf: false,
      error: action.payload
    };

    default:
      return state;
  }
};

export default rootReducer;
