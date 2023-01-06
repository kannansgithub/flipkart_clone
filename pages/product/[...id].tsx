import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ProductItem from '../../components/Category/ProductItem/ProductItem';
import { Product } from '../../models/Product';
import { AddToCart, FetchProduct } from '../../states/actions/Product.Action';
import { RootState } from '../../states/state/RootState';
// import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify, {
  LargeImageType,
  SmallImageType,
} from 'react-image-magnify';
import Broadcom from '../../components/Broadcom/Broadcom';
import ProductTitle from '../../components/Controls/ProductTitle/ProductTitle';
import Checkbox from '../../components/Controls/CheckBox/Checkbox';
import { IoIosShareAlt } from 'react-icons/io';
import Link from 'next/link';
import Rating from '../../components/Controls/Rating/Rating';
import Review from '../../components/Controls/Review/Review';
import { IoIosCart, IoIosFlash } from 'react-icons/io';
import { CartItem } from '../../models/Cart';
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  id: number;
};

const ProductPage = ({ id, product, fetchProduct, addToCart }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllOfferes, setshowAllOfferes] = useState(false);
  const HandleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    addItemToCart();
  };
  const HandleBuyNow = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    addItemToCart();
  };
  const addItemToCart = () => {
    const item: CartItem = {
      id: product.id,
      price: product.price,
      quantity: 1,
      thumbnail: product.thumbnail,
      title: product.title,
    };
    addToCart(item);
  };
  const maxOfferToShow = 3;
  const offers = [
    {
      name: 'Bank Offer',
      description: '5% Cashback on Flipkart Axis Bank Card',
      conText: 'T&C',
      image: '/img/li/offer.png',
    },
    {
      name: 'No cost EMI ₹10,334/month.',
      description: 'Standard EMI also available',
      conText: 'View Plans',
      image: '/img/li/cal.png',
    },
    {
      name: 'Partner Offer',
      description:
        'Purchase now & get a surprise cashback coupon for January / February 2023',
      conText: 'Know More',
      image: '/img/li/offer.png',
    },
    {
      name: 'Freebie',
      description: 'CoinDCX Get Bitcoin Worth ₹251',
      conText: 'T&C',
      image: '/img/li/offer.png',
    },
    {
      name: 'Freebie',
      description: 'Exam Prep Classes worth ₹999',
      conText: 'T&C',
      image: '/img/li/offer.png',
    },
  ];
  const remainingOffer = offers.length - maxOfferToShow - 1;

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);
  const largeImageConfig: LargeImageType = {
    src: `/img/No_Image_Available.jpg`,
    alt: 'Product',
    width: 900,
    height: 1000,
  };
  const smallImageConfig: SmallImageType = {
    src: `/img/No_Image_Available.jpg`,
    isFluidWidth: false,
    width: 400,
    height: 400,
  };
  if (product) {
    largeImageConfig.src = `${product.images[activeIndex]}`;
    smallImageConfig.src = `${product.images[activeIndex]}`;
  }
  return (
    <>
      {product ? (
        <div className="flex p-6 w-full">
          <div className="bg-white w-2/5 " style={{ height: '75vh' }}>
            <div className="flex border border-gray-400  h-full">
              <div className="w-24 border-r border-gray-400 flex flex-col justify-start items-center">
                {product.images.map((img, index) => {
                  return (
                    <div
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                      key={index}
                      className={`${
                        index < product.images.length - 1 ? 'border-b' : null
                      }  p-2  border-gray-400 hover:border-primary hover:border-4`}
                    >
                      <Image src={img} height={75} width={75} alt="img" />
                    </div>
                  );
                })}
              </div>
              <div className="flex-1 py-4 bg-lightgray relative">
                {/* <ReactImageMagnify
                  smallImage={smallImageConfig}
                  largeImage={largeImageConfig}
                  isHintEnabled={true}
                  className="w-full h-full"
                /> */}
                <Image
                  className="h-full w-full"
                  src={product.images[activeIndex]}
                  alt={product.title}
                  height={500}
                  width={500}
                />
                <div className="w-full flex justify-between mx-4  absolute top-5">
                  <div className="cursor-pointer rounded-sm p-1 px-2 bg-bestvalue text-white font-semibold">
                    Bestseller
                  </div>
                  <div className="bg-white p-2 rounded-full mr-10 cursor-pointer">
                    <Image
                      src="/img/fav.svg"
                      height={15}
                      width={15}
                      alt=""
                      className="mx-1 top-0 relative"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 content-center justify-center mt-5 ml-14 ">
              <button
                className="bg-tertiary uppercase py-5 text-white px-9 text-semibold font-xl flex gap-2"
                onClick={HandleAddToCart}
              >
                <IoIosCart className="mt-1 font-semibold text-xl" />
                <span className="text-semibold font-xl">Add to Cart</span>
              </button>
              <button
                className="bg-secondary uppercase py-5 text-white px-11 text-semibold font-xl flex gap-2"
                onClick={HandleBuyNow}
              >
                <IoIosFlash className="mt-1 font-semibold text-xl" />
                <span>Buy Now</span>
              </button>
            </div>
          </div>
          <div className="bg-white w-3/5 px-9">
            <div className="flex justify-between">
              <Broadcom />
              <div className="flex gap-2">
                <div className="mt-1">
                  <Checkbox
                    label="Add to Compare"
                    value=""
                    checked={() => {}}
                  />
                </div>
                <Link
                  href="/"
                  className="hover:text-primary flex text-lg font-semibold"
                >
                  <IoIosShareAlt className="text-2xl mx-2 mt-1 text-fheader" />{' '}
                  <span>Share</span>
                </Link>
              </div>
            </div>

            <ProductTitle title={product.title} />
            <div className="flex gap-3 mt-3">
              <Rating
                rating={product.rating}
                rattingCount="1,74,562"
                reviewCount="9,619"
              />
              <Image
                src="/img/assured.png"
                height={50}
                width={100}
                alt="assured"
              />
            </div>
            <div className="text-rating font-semibold mt-4 text-lg">
              Extra ₹{(product.discountPercentage * 82).toFixed(0)} off
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold">₹{product.price * 85}</div>
              <div className="text-fheader font-semibold line-through decoration-2 mt-2">
                ₹
                {(
                  product.price * 85 +
                  product.price * 85 * product.discountPercentage
                ).toFixed(0)}
              </div>
              <div className="text-rating font-semibold mt-2">
                {product.discountPercentage}% off
              </div>
            </div>
            <p>+ ₹69 Secured Packaging Fee</p>
            <div>
              <p className="text-xl font-semibold mt-4">Available offers</p>
              <ul className="mt-2">
                {offers.map((offer, index) => {
                  if (index < maxOfferToShow) {
                    return (
                      <li key={index} className="py-1">
                        <div className="flex gap-2 ">
                          <Image
                            src={offer.image}
                            height={20}
                            width={25}
                            alt="decoration"
                          />
                          <h2 className="font-semibold">{offer.name}</h2>
                          <p>{offer.description}</p>
                          <div className="font-semibold text-primary">
                            {offer.conText}
                          </div>
                        </div>
                      </li>
                    );
                  } else if (index == maxOfferToShow) {
                    if (!showAllOfferes) {
                      return (
                        <li
                          key={index}
                          className="py-1 cursor-pointer"
                          onClick={() => setshowAllOfferes(true)}
                        >
                          <div className="flex gap-2 ">
                            <div className="font-semibold text-primary text-lg">
                              View {remainingOffer} more offers
                            </div>
                          </div>
                        </li>
                      );
                    }
                  } else {
                    if (showAllOfferes) {
                      return (
                        <li key={index} className="py-1">
                          <div className="flex gap-2 ">
                            <Image
                              src={offer.image}
                              height={20}
                              width={25}
                              alt="decoration"
                            />
                            <h2 className="font-semibold">{offer.name}</h2>
                            <p>{offer.description}</p>
                            <div className="font-semibold text-primary">
                              {offer.conText}
                            </div>
                          </div>
                        </li>
                      );
                    }
                  }
                })}
              </ul>
            </div>
            <div>
              <Review
                average="4.5"
                batteryRating={4.4}
                cameraRating={4.6}
                designRating={4.6}
                displayRating={4.7}
                fiveStar={141243}
                fourStar={21543}
                oneStar={15950}
                threeStar={4113}
                totalReview="9,623"
                totalrating={184625}
                twoStar={1756}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
const mapState = (state: RootState) => ({
  product: state?.productReducer?.selectedProduct as Product,
});

const mapDispatch = {
  fetchProduct: (id: number) => FetchProduct(id),
  addToCart: (item: CartItem) => AddToCart(item),
};
const connector = connect(mapState, mapDispatch);
export default connector(ProductPage);
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  return {
    props: {
      id,
    },
    revalidate: 60 * 60 * 24, // Re-build page every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
