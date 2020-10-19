import * as actions from '../actions/config';
import { planOptions } from '../../config/constants';

const INITIAL_STATE = {
  display: planOptions.TRIENNIALLY,
};

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_DISPLAY:
      return { ...state, display: action.payload.display };
    default:
      return state;
  }
};

export default configReducer;
