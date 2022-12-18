/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';

type Props = {
  imgUrl: string;
  discount: string;
};

const ProductCard = ({ imgUrl, discount }: Props) => {
  return (
    <>
      <motion.div
        className="relative h-96 p-4 items-center text-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          src={imgUrl}
          alt="banner"
          loading="lazy"
          className="h-3/5 w-full"
        />
        <div className="bg-gray-100 flex justify-between px-2">
          <h2 className="text-xl p-1 font-semibold">Up to {discount}% Off</h2>
          <svg
            aria-hidden="true"
            className="w-5 h-5 mt-1 text-primary sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
