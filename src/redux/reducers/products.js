import * as actions from '../actions/products';

const INITIAL_STATE = [];

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return action.payload.products;
    default:
      return state;
  }
};

export default productsReducer;
