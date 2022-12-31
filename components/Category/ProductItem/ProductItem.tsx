import Image from 'next/image';
import { Product } from '../../../models/Product';
import Checkbox from '../../Controls/CheckBox/Checkbox';
import ProductTitle from '../../Controls/ProductTitle/ProductTitle';
import Rating from '../../Controls/Rating/Rating';
type Props = {
  product: Product;
  className?: string;
};

const ProductItem = ({ product, className }: Props) => {
  return (
    <div className="border-b border-lightgray cursor-pointer">
      <div className="flex justify-between my-4">
        <div className="w-1/4 flex items-start mr-2">
          <Image
            src={product.thumbnail}
            loading="lazy"
            height={500}
            width={400}
            alt={`${product.title}-image`}
          />
          <Image
            src="/img/fav.svg"
            height={20}
            width={20}
            alt=""
            className="mx-1 top-0 relative"
          />
        </div>
        <div className="px-6 w-2/4">
          <ProductTitle title={product.title} className={className} />
          <div className="flex gap-1">
            <Rating
              rating={product.rating}
              rattingCount="1,74,562"
              reviewCount="9,619"
            />
          </div>
          <div className="m-4 ">
            <ul className="list-disc marker:text-fheader font-semibold">
              <li>128 GB ROM</li>
              <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
              <li>12MP + 12MP | 12MP Front Camera</li>
              <li>A15 Bionic Chip Processor</li>
              <li>Brand Warranty for 1 Year</li>
            </ul>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-2xl font-bold">₹{product.price * 85}</div>
          <div className="flex gap-3">
            <div className="text-fheader font-semibold line-through decoration-2">
              ₹
              {(
                product.price * 85 +
                product.price * 85 * product.discountPercentage
              ).toFixed(0)}
            </div>
            <div className="text-rating font-semibold">
              {product.discountPercentage}% off
            </div>
          </div>
          <div className="font-semibold">
            Delivery by
            <span className="text-xl font-bold"> 2 PM, Tomorrow</span>
          </div>
          <div className="font-semibold">
            Upto <span className="font-bold">₹17,500</span> Off on Exchange
          </div>
          <div className="text-sm">No Cost EMI from ₹10,334/month</div>
        </div>
      </div>
      <div className="mb-5">
        <Checkbox label="Add to Compare" value="" checked={() => {}} />
      </div>
    </div>
  );
};
export default ProductItem;
