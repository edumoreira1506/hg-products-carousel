import { combineReducers } from 'redux';
import products from './products';
import config from './config';

const rootReducer = combineReducers({ products, config });

export default rootReducer;
