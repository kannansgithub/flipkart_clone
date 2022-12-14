import Banner from '../components/Banner/Banner';
import MenuBar from '../components/MenuBar/MenuBar';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <div className="bg-lightgray">
      <Navbar />
      <MenuBar />
      <Banner />
      <div className=" h-full w-full">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}
