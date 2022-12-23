import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import FlipkartStoreApi from '../../api/FlipkartStore.Api';
import { RootState } from '../state/RootState';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from '../Types.Action';

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
    console.log(products);
    dispatch({
      type: FETCH_PRODUCTS_BY_CATEGORY,
      payload: products.data,
    });
  };
