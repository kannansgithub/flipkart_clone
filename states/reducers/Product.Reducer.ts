import { AnyAction } from 'redux';
import { ProductState } from '../state/ProductState';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from '../Types.Action';

export const initialState: ProductState = {
  productList: [],
};
const ProductReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BY_CATEGORY:
    case FETCH_PRODUCTS: {
      return {
        ...state,
        productList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default ProductReducer;
