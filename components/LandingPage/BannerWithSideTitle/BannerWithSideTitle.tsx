import React from 'react';
import Carousel from 'react-multi-carousel';
import { ResponsiveWithThreeImage } from '../../../configs/BannerConfig';
import { Product } from '../../../models/Product';
import NextButton from '../../Shared/ArrowButtons/NextButton';
import PrevButton from '../../Shared/ArrowButtons/PrevButton';
import Header from '../../Shared/Header/Header';
import ProductCard from '../../Shared/ProductCard/ProductCard';

type Props = {
  productList: Product[];
  title: string;
  imgUrl: string;
  redirectUrl: string;
};

const BannerWithSideTitle = ({
  productList,
  title,
  imgUrl,
  redirectUrl,
}: Props) => {
  return (
    <>
      <div className="w-1/5 h-full">
        <Header title={title} imgUrl={imgUrl} redirectionUrl={redirectUrl} />
      </div>
      <div className="w-4/5">
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
    </>
  );
};
export default BannerWithSideTitle;
