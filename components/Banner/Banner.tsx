/* eslint-disable @next/next/no-img-element */
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BannerItems } from '../../configs/BannerItems';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
const handleArrowPrev = () => {
  return true;
};
const Banner = () => {
  return (
    <div className="relative h-90  m-3">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        renderArrowNext={(onClickHandler: React.MouseEventHandler<Element>) => (
          <NextButton onClick={onClickHandler} />
        )}
        renderArrowPrev={(onClickHandler: React.MouseEventHandler<Element>) => (
          <PrevButton onClick={onClickHandler} />
        )}
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
