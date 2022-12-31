import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Broadcom from '../../components/Broadcom/Broadcom';
import HeaderItem from '../../components/Category/HeaderItem/HeaderItem';
import NonImageMenuBar from '../../components/Category/NonImageMenuBar/NonImageMenuBar';
import ProductItem from '../../components/Category/ProductItem/ProductItem';
import Checkbox from '../../components/Controls/CheckBox/Checkbox';
import HelpImage from '../../components/HelpImage/HelpImage';
import Grid from '../../components/Shared/Grid/Grid';
import ProductCard from '../../components/Shared/ProductCard/ProductCard';
import { Product } from '../../models/Product';
import { FetchProductsByCategory } from '../../states/actions/Product.Action';
import { RootState } from '../../states/state/RootState';
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};
const handleCheckboxChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const SearchQuery = ({
  products,
  fetchProductByCategory,
  totalProduct,
}: Props) => {
  const router = useRouter();
  const { q } = router.query;
  const category = q as string;
  useEffect(() => {
    if (category) {
      fetchProductByCategory(category);
    }
  }, [fetchProductByCategory, category]);
  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    e.stopPropagation(); // Handy if you want to prevent event bubbling to scrollable parent
    console.log({
      event: e,
      target: e.target, // Note 1* scrollTop is undefined on e.target
      currentTarget: e.currentTarget,
      scrollTop: e.currentTarget.scrollTop,
    });
  };
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <main className="bg-lightgray h-full w-full" onScroll={handleScroll}>
      <NonImageMenuBar />
      <div className="m-3 ">
        <div className="flex justify-between gap-3">
          <div className="w-1/4 flex flex-col gap-3">
            <div className="bg-white">
              <h2 className="font-semibold text-2xl p-5">Filters</h2>
              <div className="border-t border-lightgray">
                <div className="p-5">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setOpenSubMenu(!openSubMenu)}
                  >
                    <h2 className="font-semibold text-md uppercase">
                      CATEGORIES
                    </h2>
                    <Image
                      src="/img/arrow_gray.svg"
                      height={10}
                      width={10}
                      alt="arrow"
                      className={`${openSubMenu ? '-rotate-90' : 'rotate-90'}`}
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-lightgray">
                <div className="p-5">
                  <h2 className="font-semibold text-md uppercase">Price</h2>
                  <input
                    id="small-range"
                    type="range"
                    value="50"
                    className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer  range-sm dark:bg-gray-700"
                  ></input>
                  <div className="flex justify-between">
                    <select className="bg-gray-50 border border-gray-300 text-gray-900  w-32 p-2 text-lg font-semibold">
                      <option value={0}>Min</option>
                      <option value={0}>100</option>
                      <option value={0}>200</option>
                      <option value={0}>300</option>
                    </select>
                    <div className="py-2 font-semibold">To</div>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-semibold w-32 p-2">
                      <option value={0}>Max</option>
                      <option value={0}>1000</option>
                      <option value={0}>2000</option>
                      <option value={0}>3000+</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="border-t border-lightgray">
                <div className="p-5">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setOpenSubMenu(!openSubMenu)}
                  >
                    <h2 className="font-semibold text-md uppercase mb-4">
                      Brand
                    </h2>
                    <Image
                      src="/img/arrow_gray.svg"
                      height={10}
                      width={10}
                      alt="arrow"
                      className={`${openSubMenu ? '-rotate-90' : 'rotate-90'}`}
                    />
                  </div>
                  <div
                    className={`${
                      openSubMenu ? 'flex' : 'hidden'
                    } flex-col gap-4`}
                  >
                    <Checkbox
                      value=""
                      label="Apple"
                      checked={handleCheckboxChecked}
                    />
                    <Checkbox
                      value=""
                      label="Samsung"
                      checked={handleCheckboxChecked}
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-lightgray">
                <div className="p-5">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setOpenSubMenu(!openSubMenu)}
                  >
                    <h2 className="font-semibold text-md uppercase mb-4">
                      CUSTOMER RATINGS
                    </h2>
                    <Image
                      src="/img/arrow_gray.svg"
                      height={10}
                      width={10}
                      alt="arrow"
                      className={`${openSubMenu ? '-rotate-90' : 'rotate-90'}`}
                    />
                  </div>
                  <div
                    className={`${
                      openSubMenu ? 'flex' : 'hidden'
                    } flex-col gap-4`}
                  >
                    <Checkbox
                      value=""
                      label="4 ★ & above"
                      checked={handleCheckboxChecked}
                    />
                    <Checkbox
                      value=""
                      label="3 ★ & above"
                      checked={handleCheckboxChecked}
                    />
                    <Checkbox
                      value=""
                      label="2 ★ & above"
                      checked={handleCheckboxChecked}
                    />
                  </div>
                </div>
              </div>
            </div>
            <HelpImage />
          </div>
          <div className="w-3/4 p-5 bg-white">
            <Broadcom />
            <h2 className="text-xl font-semibold">
              {`Showing 1-24 of ${totalProduct} for "${category}"`}
            </h2>
            <div className="flex justify-start gap-6 mt-3 text-md border-b-2 ">
              <div className="font-bold py-2">Sort By</div>
              <div className="py-2 border-b-4 border-primary text-primary font-bold">
                Relevance
              </div>
              <div className="py-2">Popularity</div>
              <div className="py-2">Price--Low to High</div>
              <div className="py-2">Price--High to Low</div>
              <div className="py-2">Newest First</div>
            </div>
            {products
              ? products.map((product, index) => {
                  return (
                    <Link
                      href={`product/${product.id}`}
                      key={index}
                      target="_blank"
                    >
                      <ProductItem
                        product={product}
                        className="hover:text-primary"
                      />
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
        {/* <Grid>
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
        </Grid> */}
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

export default connector(SearchQuery);
// export const getStaticProps: GetStaticProps = async (context) => {
//   const searchString = context.params?.querystring as string;
//   return {
//     props: {
//       searchString,
//     },
//     revalidate: 60 * 60 * 24, // Re-build page every 24 hours
//   };
// };
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   };
// };
