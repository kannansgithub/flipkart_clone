import Banner from '../components/Banner/Banner';
import ProductSlider from '../components/LandingPage/ProductSlider';
import MenuBar from '../components/MenuBar/MenuBar';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <div className="bg-lightgray">
      <Navbar />
      <MenuBar />
      <Banner />
      <ProductSlider />
    </div>
  );
}
