import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import FlipkartStoreApi from '../../api/FlipkartStore.Api';
import { CartItem } from '../../models/Cart';
import { RootState } from '../state/RootState';
import {
  ADD_TO_CART,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_CATEGORY,
} from '../Types.Action';

export const FetchProducts =
  (): ThunkAction<void, RootState, {}, AnyAction> => async (dispatch) => {
    const products = await FlipkartStoreApi.get('/products');
    console.log(products);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products.data,
    });
  };
export const FetchProductsByCategory =
  (category: string): ThunkAction<void, RootState, {}, AnyAction> =>
  async (dispatch) => {
    const products = await FlipkartStoreApi.get(`/products`);
    dispatch({
      type: FETCH_PRODUCTS_BY_CATEGORY,
      payload: products.data,
    });
  };
export const FetchProduct =
  (id: number): ThunkAction<void, RootState, {}, AnyAction> =>
  async (dispatch) => {
    const product = await FlipkartStoreApi.get(`/products/${id}`);
    dispatch({
      type: FETCH_PRODUCT,
      payload: product.data,
    });
  };
export const AddToCart =
  (item: CartItem): ThunkAction<void, RootState, {}, AnyAction> =>
  async (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
