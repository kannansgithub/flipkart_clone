/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-multi-carousel';
import { BannerItems } from '../../configs/BannerItems';
import NextButton from '../ArrowButtons/NextButton';
import PrevButton from '../ArrowButtons/PrevButton';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <div className="relative h-90  m-3">
      <Carousel
        autoPlay
        responsive={responsive}
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
