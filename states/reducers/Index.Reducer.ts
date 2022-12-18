import { combineReducers } from 'redux';
import ProductReducer from './Product.Reducer';
const reducers = combineReducers({
  productReducer: ProductReducer,
});

export default reducers;
