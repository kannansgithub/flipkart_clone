import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Product } from '../../models/Product';
import { FetchProducts } from '../../states/actions/Product.Action';
import { RootState } from '../../states/state/RootState';
import BannerWithSideTitle from './BannerWithSideTitle/BannerWithSideTitle';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

const ProductSlider = ({ products, fetchProduct }: Props) => {
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const electronicList = products?.filter((x) => x.category === 'smartphones');

  return (
    <div className="flex flex-col">
      {electronicList?.length > 0 ? (
        <div className="bg-white h-96 mx-2 rounded-sm flex my-2">
          <BannerWithSideTitle
            title="Best of Electronics"
            productList={electronicList}
            imgUrl="/img/productheaders/Electronics.jpg"
            redirectUrl="/"
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
