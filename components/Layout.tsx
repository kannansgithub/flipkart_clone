import { ReactNode } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div
      className="h-full w-full bg-lightgray "
      onScroll={() => {
        console.log('scrolling');
      }}
    >
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
