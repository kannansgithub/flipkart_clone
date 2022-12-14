import Image from 'next/image';
import Link from 'next/link';
import LoginButton from './LoginButton/LoginButton';
import NavLink from './NavLink/NavLink';
import SearchInput from './SearchInput/SearchInput';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${classes.navbarMain}`}>
      <div className={classes.navbarContainer}>
        <div className="flex flex-col mt-1">
          <Image
            src="/img/logo.png"
            alt="Flipkart logo"
            height={27}
            width={100}
          />

          <Link href="/plus" className="hover:underline">
            <div className="flex flex-row gap-1">
              <div className="text-gray-100 italic text-sm font-semibold">
                Explore
              </div>
              <div className="font-semibold italic text-plus text-sm">Plus</div>
              <Image
                src="/img/star.png"
                alt="Plus"
                height={2}
                width={12}
                className="mb-1"
              />
            </div>
          </Link>
        </div>
        <SearchInput />
        <LoginButton />
        <NavLink href="/" text="Become a Seller"></NavLink>
        <NavLink href="/" text="More" sufixIcon="/img/down-arrow.png"></NavLink>
        <NavLink href="/" text="Cart" prefixIconUrl="/img/cart.svg"></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
