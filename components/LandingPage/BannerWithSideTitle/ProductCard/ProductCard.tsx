import { motion } from 'framer-motion';
type Props = {
  title: string;
  brand: string;
  discount: string;
  imgUrl: string;
};

const ProductCard = ({ title, brand, discount, imgUrl }: Props) => {
  return (
    <>
      <div className="relative h-96 p-4 items-center text-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          src={imgUrl}
          alt="banner"
          loading="lazy"
          className="h-3/5"
        />
        <div className="my-4">
          <h2 className="p-1 font-semibold text-xl">{title}</h2>
          <h2 className="text-xl text-green-600 p-1">Extra {discount}%Off</h2>
          <h2 className="text-xl text-slate-400 p-1">{brand}</h2>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
