/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="h-full">
          <img loading="lazy" src="/img/carousel/1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/img/carousel/2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/img/carousel/3.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
