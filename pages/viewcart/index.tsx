import Image from 'next/image';
import Router from 'next/router';
import Script from 'next/script';
import { connect, ConnectedProps } from 'react-redux';
import PaymentApi from '../../api/Payment.Api';
import ProductInCart from '../../components/CartItem/CartItem';
import { CartItem } from '../../models/Cart';
import { PlaceOrder } from '../../states/actions/Product.Action';
import { RootState } from '../../states/state/RootState';
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};
const MakePayment = async () => {
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
      //return response.razorpay_order_id;
      Router.push(
        {
          pathname: '/payment-status',
          query: { q: response.razorpay_order_id },
        },
        undefined,
        { shallow: true }
      );
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
const index = ({ itemsInCart, placeOrder }: Props) => {
  const handlePlaceOrder = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    MakePayment();
  };
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className=" my-4 mx-4">
        <div className="flex  gap-4">
          <div className="w-3/4 border-2 border-gray-200">
            <div className="flex flex-col gap-3">
              <div className="w-full p-2 rounded-t-md bg-white">
                <div className="flex justify-between">
                  <div className="flex gap-3 mt-3">
                    <p>Deliver to: </p>
                    <h2 className="font-semibold">Bangalore - 560100</h2>
                  </div>
                  <button className="p-3 border border-gray-200 text-primary font-semibold rounded-lg px-6">
                    Change
                  </button>
                </div>
              </div>
              <div className=" bg-white shadow-md p-4">
                {itemsInCart && itemsInCart.length > 0 ? (
                  itemsInCart.map((item, index) => (
                    <ProductInCart item={item} key={index} />
                  ))
                ) : (
                  <div>No Items are in your cart</div>
                )}
              </div>
              <div className="w-full bg-white shadow-md border border-gray-300 p-4 flex justify-end">
                <button
                  className="bg-secondary uppercase py-5 text-white px-24 font-semibold text-xl rounded-md"
                  onClick={handlePlaceOrder}
                >
                  place order
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/4 bg-white  rounded-sm">
            <div className="border-b border-gray-200">
              <div className="p-5">
                <h2 className="font-semibold uppercase text-xl text-gray-400">
                  Price details
                </h2>
              </div>
            </div>
            <div className="px-6">
              <div className="border-b border-dashed border-gray-300">
                <div className="flex flex-col gap-3 py-4 text-lg font-semibold">
                  <div className="flex justify-between">
                    <div>Price (1 item)</div>
                    <div>31,500</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Discount</div>
                    <div className="text-green-500 ">-15,500</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Buy more & save more</div>
                    <div className="text-green-500 ">-60</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Delivery Charges</div>
                    <div className="text-green-500 ">FREE</div>
                  </div>
                </div>
              </div>
              <div className="border-b border-dashed border-gray-300">
                <div className="flex flex-col gap-3 py-4">
                  <div className="flex justify-between text-2xl font-semibold">
                    <div>Total Amount</div>
                    <div>₹13,602</div>
                  </div>
                </div>
              </div>
              <div className="text-green-600 font-semibold my-3 text-md">
                You will save ₹17,911 on this order
              </div>
            </div>
            {/* <div>
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </div> */}
            <div className="p-4 bg-yellow-50 text-md font-semibold text-slate-600">
              <div className="my-2">
                Save extra ₹80 using 80 SuperCoins on the next step
              </div>
              <div className="flex gap-2">
                <div>Available Balance:</div>
                <Image src="/img/coin.png" height={7} width={20} alt="coin" />
                <div>80</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapState = (state: RootState) => ({
  itemsInCart: state?.productReducer.ItemInCart as CartItem[],
});

const mapDispatch = {
  placeOrder: () => PlaceOrder(),
};
const connector = connect(mapState, mapDispatch);
export default connector(index);
