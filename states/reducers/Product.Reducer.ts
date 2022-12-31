import { AnyAction } from 'redux';
import { ProductState } from '../state/ProductState';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCT,
  ADD_TO_CART,
} from '../Types.Action';

export const initialState: ProductState = {
  productList: [],
  selectedProduct: undefined,
  ItemInCart: [],
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
    case FETCH_PRODUCT: {
      return {
        ...state,
        selectedProduct: action.payload,
      };
    }
    case ADD_TO_CART: {
      console.log(state.ItemInCart);
      console.log(action.payload);
      const currentItem = [...state.ItemInCart];
      const index = currentItem.findIndex((x) => x.id == action.payload.id);
      if (index >= 0) {
        currentItem[index].quantity += 1;
      } else {
        currentItem.push(action.payload);
      }
      return {
        ...state,
        ItemInCart: [...currentItem],
      };
    }
    default:
      return state;
  }
};

export default ProductReducer;
