import React from 'react';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem/CarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
const featureProducts = [
  '/img/carousel/1.jpg',
  '/img/carousel/2.jpg',
  '/img/carousel/3.jpg',
  '/img/carousel/1.jpg',
  '/img/carousel/1.jpg',
  '/img/carousel/1.jpg',
  '/img/carousel/1.jpg',
];
type Props = {};

function CarouselSlide({}: Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="relative h-96  bg-purple-800 m-3">
      <Slider {...settings} className="relative h-full ">
        <div className="h-full bg-red-500">
          <h1>Hello</h1>
        </div>
        <div className="h-full bg-green-500">
          <h1>Hello</h1>
        </div>

        {/* {
        featureProducts.map((x,i)=>{
          <CarouselItem imgUrl={x} key={i}/>
        })
      } */}
      </Slider>
    </div>
  );
}

export default CarouselSlide;
