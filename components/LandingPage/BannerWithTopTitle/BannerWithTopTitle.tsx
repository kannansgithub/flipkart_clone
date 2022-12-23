import Carousel from 'react-multi-carousel';
import { ResponsiveWithThreeImage } from '../../../configs/BannerConfig';
import { Product } from '../../../models/Product';
import NextButton from '../../Shared/ArrowButtons/NextButton';
import PrevButton from '../../Shared/ArrowButtons/PrevButton';

import ProductCard from './ProductCard/ProductCard';

type Props = {
  productList: Product[];
  title: string;
  redirectUrl: string;
};

const BannerWithTopTitle = ({ productList, title, redirectUrl }: Props) => {
  return (
    <>
      <div className="w-full flex flex-col">
        <h2 className="relative p-4 font-semibold text-2xl">{title}</h2>
        <div className="w-full h-72">
          <Carousel
            autoPlay={false}
            responsive={ResponsiveWithThreeImage}
            showDots={false}
            infinite={false}
            keyBoardControl={true}
            customLeftArrow={<PrevButton className="top-10" />}
            customRightArrow={<NextButton className="top-10" />}
          >
            {productList.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  discount={product.discountPercentage.toString()}
                  imgUrl={product.thumbnail}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default BannerWithTopTitle;
