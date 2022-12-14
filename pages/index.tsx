import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" h-full w-full">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}
