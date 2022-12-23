import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  ImageBanner1,
  ImageBanner2,
  ImageBanner3,
} from '../../configs/ImageBannerConfig';
import { Product } from '../../models/Product';
import { FetchProducts } from '../../states/actions/Product.Action';
import { RootState } from '../../states/state/RootState';
import BannerWithSideTitle from './BannerWithSideTitle/BannerWithSideTitle';
import BannerWithTopTitle from './BannerWithTopTitle/BannerWithTopTitle';
import HotDealBanner from './HotDealBanner/HotDealBanner';
import ImageBanner from './ImageBanner/ImageBanner';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

const ProductSlider = ({ products, fetchProduct }: Props) => {
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  const essentialsList = products?.filter((x) => x.category === 'smartphones');
  const electronicList = products?.filter((x) => x.category === 'smartphones');
  const applianceList = products?.filter((x) => x.category === 'fragrances');
  return (
    <div className="flex flex-col">
      {applianceList?.length > 0 ? (
        <div className="bg-white h-96 mx-2 rounded-sm flex my-2">
          <HotDealBanner
            title="Top Offers"
            productList={applianceList}
            imgUrl="/img/productheaders/Essentials.jpg"
            redirectUrl="/offer-list/smartphones"
          />
        </div>
      ) : null}
      {ImageBanner1?.length > 0 ? (
        <div className="my-2">
          <ImageBanner
            className="h-72"
            imageList={ImageBanner1}
            redirectUrl="/offer-list/smartphones"
          />
        </div>
      ) : null}

      {electronicList?.length > 0 ? (
        <div className="bg-white h-96 mx-2 rounded-sm flex my-2">
          <BannerWithSideTitle
            title="Best of Electronics"
            productList={electronicList}
            imgUrl="/img/productheaders/Electronics.jpg"
            redirectUrl="/offer-list/smartphones"
          />
        </div>
      ) : null}
      {ImageBanner2?.length > 0 ? (
        <div className="my-2">
          <ImageBanner
            className="h-48"
            imageList={ImageBanner2}
            redirectUrl="/offer-list/smartphones"
          />
        </div>
      ) : null}
      {ImageBanner3?.length > 0 ? (
        <div className="my-2">
          <ImageBanner
            className="h-72"
            imageList={ImageBanner3}
            redirectUrl="/offer-list/smartphones"
          />
        </div>
      ) : null}
      {essentialsList?.length > 0 ? (
        <div className="bg-white h-auto mx-2 rounded-sm flex my-2">
          <BannerWithTopTitle
            title="Featured Brands"
            productList={essentialsList}
            redirectUrl="/offer-list/smartphones"
          />
        </div>
      ) : null}
    </div>
  );
};
const mapState = (state: RootState) => ({
  products: state?.productReducer?.productList?.products as Product[],
});

const mapDispatch = {
  fetchProduct: () => FetchProducts(),
};
const connector = connect(mapState, mapDispatch);
export default connector(ProductSlider);
