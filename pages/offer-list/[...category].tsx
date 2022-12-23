import { UIEvent, UIEventHandler, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import HeaderItem from '../../components/Category/HeaderItem/HeaderItem';
import NonImageMenuBar from '../../components/Category/NonImageMenuBar/NonImageMenuBar';
import { RootState } from '../../states/state/RootState';
import { Product } from '../../models/Product';
import { FetchProductsByCategory } from '../../states/actions/Product.Action';
import { connect, ConnectedProps } from 'react-redux';
import ProductCard from '../../components/Shared/ProductCard/ProductCard';
import Grid from '../../components/Shared/Grid/Grid';
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  category: string;
};

const ProductByCategory = ({
  category,
  products,
  fetchProductByCategory,
  totalProduct,
}: Props) => {
  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    e.stopPropagation(); // Handy if you want to prevent event bubbling to scrollable parent
    console.log({
      event: e,
      target: e.target, // Note 1* scrollTop is undefined on e.target
      currentTarget: e.currentTarget,
      scrollTop: e.currentTarget.scrollTop,
    });
    //e: UIEvent<HTMLElement>
    // console.log('E: ', e);
    // const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    // const footerHeight = 230;
    // const scrollArea = clientHeight - footerHeight;
    // console.log(
    //   'scrollTop: ',
    //   scrollTop,
    //   'clientHeight: ',
    //   clientHeight,
    //   'scrollHeight: ',
    //   scrollHeight
    // );
  };

  useEffect(() => {
    fetchProductByCategory(category);
  }, [fetchProductByCategory, category]);
  return (
    <main className="bg-lightgray h-full w-full" onScroll={handleScroll}>
      <NonImageMenuBar />
      <div className="m-3 bg-white">
        <HeaderItem title={category} totalItems={totalProduct} />
        <Grid>
          {products
            ? products.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={product.title}
                    brand={product.brand}
                    discount={product.discountPercentage.toString()}
                    imgUrl={product.thumbnail}
                  />
                );
              })
            : null}
        </Grid>
      </div>
    </main>
  );
};
const mapState = (state: RootState) => ({
  products: state?.productReducer?.productList?.products as Product[],
  totalProduct: state?.productReducer?.productList?.total,
});

const mapDispatch = {
  fetchProductByCategory: (category: string) =>
    FetchProductsByCategory(category),
};
const connector = connect(mapState, mapDispatch);
export default connector(ProductByCategory);

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.category as string;
  return {
    props: {
      category,
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
