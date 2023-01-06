import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import FlipkartStoreApi from '../../api/FlipkartStore.Api';
import PaymentApi from '../../api/Payment.Api';
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
export const PlaceOrder = async () => {
  //https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/#12-integrate-with-checkout-on-client-side
  // https://ngrok.com/download
  //https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#15-verify-payment-signature
  const orderInfo = await PaymentApi.post(`/checkout`);
  const options = {
    key: 'rzp_test_OZN7XjvAckkb9u',
    currency: orderInfo.data.currency,
    amount: orderInfo.data.amount.toString(),
    order_id: orderInfo.data.id,
    name: 'Donation',
    description: 'Thank you for nothing. Please give us some money',
    handler: function (response: any) {
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
      return response.razorpay_order_id;
    },
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
  };
  const paymentObject = (window as any).Razorpay(options);
  paymentObject.open();
};
