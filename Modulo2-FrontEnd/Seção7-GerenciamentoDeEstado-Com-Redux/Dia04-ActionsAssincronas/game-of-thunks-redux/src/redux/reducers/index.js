import { combineReducers } from 'redux';
import { REQUEST_API, REQUEST_API_FAILURE, REQUEST_API_SUCCESS } from '../actions';

const INITIAL_STATE = {
    isFetch: false,
    character: '',
};

const apiReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case REQUEST_API:
    return {
      ...state,
      isFetch: true,
    }
   case REQUEST_API_SUCCESS:
    return {
      ...state,
      isFetch: false,
      character: action.character[0],
    }
   case REQUEST_API_FAILURE:
    return {
      ...state,
      isFetch: false,
    }
   default:
    return state;
 }
}

const rootReducer = combineReducers({ apiReducer })

export default rootReducer;