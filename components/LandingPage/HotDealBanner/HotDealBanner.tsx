import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import { ResponsiveWithThreeImage } from '../../../configs/BannerConfig';
import { RightBannerImage } from '../../../configs/TopOffer';
import { Product } from '../../../models/Product';
import NextButton from '../../ArrowButtons/NextButton';
import PrevButton from '../../ArrowButtons/PrevButton';
import Header from '../Shared/Header/Header';
import ProductCard from '../Shared/ProductCard/ProductCard';

type Props = {
  productList: Product[];
  title: string;
  imgUrl: string;
  redirectUrl: string;
};
const GetRandomImagePath = () => {
  const index = Math.floor(Math.random() * RightBannerImage.length);
  return RightBannerImage[index];
};

const HotDealBanner = ({ productList, title, imgUrl, redirectUrl }: Props) => {
  return (
    <>
      <div className="w-1/5 h-full">
        <Header title={title} imgUrl={imgUrl} redirectionUrl={redirectUrl} />
      </div>
      <div className="w-3/5">
        <Carousel
          autoPlay={false}
          responsive={ResponsiveWithThreeImage}
          showDots={false}
          infinite={false}
          keyBoardControl={true}
          customLeftArrow={<PrevButton />}
          customRightArrow={<NextButton />}
        >
          {productList.map((product, index) => {
            return (
              <ProductCard
                key={index}
                title={product.title}
                brand={product.brand}
                discount={product.discountPercentage.toString()}
                imgUrl={product.thumbnail}
              />
            );
          })}
        </Carousel>
      </div>
      <div className="w-1/5 h-full">
        <div className="h-full w-full relative cursor-pointer">
          <Image
            src={GetRandomImagePath()}
            fill
            object-fill
            object-position="center"
            alt="product category"
          />
        </div>
      </div>
    </>
  );
};

export default HotDealBanner;
