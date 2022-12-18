import Banner from '../components/Banner/Banner';
import ProductSlider from '../components/LandingPage/ProductSlider';
import MenuBar from '../components/MenuBar/MenuBar';
export default function Home() {
  return (
    <div className="bg-lightgray">
      <MenuBar />
      <Banner />
      <ProductSlider />
    </div>
  );
}
