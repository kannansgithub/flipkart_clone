import Image from 'next/image';
import { CartItem } from '../../models/Cart';
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
type Props = {
  item: CartItem;
};
const getDate = () => {
  const today = new Date();
  var day = days[today.getDay()];
  var month = months[today.getMonth()];
  var date = today.getDate();
  return `${day} ${month} ${date}`;
};
const ProductInCart = ({ item }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="h-3/4">
          <Image src={item.thumbnail} height={200} width={200} alt="" />
        </div>
        <div className="flex gap-3 mt-4">
          <button className="bg-gray-100  border border-gray-400 h-10 w-10 rounded-full shadow font-bold text-xl">
            -
          </button>
          <input
            type="text"
            value={item.quantity}
            className="border border-gray-400 text-center w-16 font-semibold text-xl"
          />
          <button className="bg-gray-100  border border-gray-400 h-10 w-10 rounded-full shadow font-bold text-xl">
            +
          </button>
        </div>
      </div>
      <div className="w-2/4">
        <div className="h-3/4">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <div className="flex gap-2">
            <div className="text-md text-gray-400">
              Seller: Jain Bandhu Entreprises
            </div>
            <Image
              src="/img/assured.png"
              height={30}
              width={80}
              alt="assured"
            />
          </div>
          <p className="mt-5 text-xl font-semibold">₹{item.price}</p>
        </div>
        <div className="flex ">
          <button className="text-xl hover:text-primary p-4 uppercase font-semibold">
            Save for later
          </button>
          <button className="text-xl hover:text-primary p-4 uppercase font-semibold">
            Remove
          </button>
        </div>
      </div>
      <p>Delivery by {getDate()}</p>
    </div>
  );
};

export default ProductInCart;
