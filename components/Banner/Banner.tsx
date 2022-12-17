/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-multi-carousel';
import { BannerItems } from '../../configs/BannerItems';
import NextButton from '../ArrowButtons/NextButton';
import PrevButton from '../ArrowButtons/PrevButton';

import 'react-multi-carousel/lib/styles.css';
import { ResponsiveWithOneImage } from '../../configs/BannerConfig';

const Banner = () => {
  return (
    <div className="relative h-90  m-3">
      <Carousel
        autoPlay
        responsive={ResponsiveWithOneImage}
        showDots={false}
        infinite={true}
        keyBoardControl={true}
        autoPlaySpeed={5000}
        customLeftArrow={<PrevButton />}
        customRightArrow={<NextButton />}
      >
        {BannerItems.map((item, index) => {
          return (
            <div key={index} className="h-full">
              <img src={item} alt="banner" loading="lazy" className="h-90" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
