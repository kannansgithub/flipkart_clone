import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="bg-footer pt-4">
      <div className="flex flex-col">
        <div className="flex justify-between mx-10">
          <div>
            <h2 className="text-fheader uppercase mb-2">About</h2>
            <ul className="text-white">
              <li className="cursor-pointer hover:underline py-1">
                <Link href="/">Contact Us</Link>{' '}
              </li>
              <li className="cursor-pointer hover:underline py-1">About Us</li>
              <li className="cursor-pointer hover:underline py-1">Careers</li>
              <li className="cursor-pointer hover:underline py-1">
                Flipkart Stories
              </li>
              <li className="cursor-pointer hover:underline py-1">Press</li>
              <li className="cursor-pointer hover:underline py-1">
                Flipkart Wholesale
              </li>
              <li className="cursor-pointer hover:underline py-1">
                Corporate Information
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-fheader uppercase">HELP</h2>
            <ul className="text-white">
              <li className="cursor-pointer hover:underline py-1">
                <Link href="/">Payment</Link>{' '}
              </li>
              <li className="cursor-pointer hover:underline py-1">Shipping</li>
              <li className="cursor-pointer hover:underline py-1">
                Cancellation & Return
              </li>
              <li className="cursor-pointer hover:underline py-1">FAQ</li>
              <li className="cursor-pointer hover:underline py-1">
                Report Infrigement
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-fheader uppercase">POLICY</h2>
            <ul className="text-white">
              <li className="cursor-pointer hover:underline py-1">
                <Link href="/">Return Policy</Link>
              </li>
              <li className="cursor-pointer hover:underline py-1">
                Terms Of Use
              </li>
              <li className="cursor-pointer hover:underline py-1">Security</li>
              <li className="cursor-pointer hover:underline py-1">Privacy</li>
              <li className="cursor-pointer hover:underline py-1">Sitemap</li>
              <li className="cursor-pointer hover:underline py-1">
                EPR Compliance
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-fheader uppercase">SOCIAL</h2>
            <ul className="text-white">
              <li className="cursor-pointer hover:underline py-1">
                <Link href="/">Facebook</Link>{' '}
              </li>
              <li className="cursor-pointer hover:underline py-1">Twitter</li>
              <li className="cursor-pointer hover:underline py-1">Youtube</li>
            </ul>
          </div>
          <div className="">
            <div className="border-l pl-9 border-fborder">
              <h2 className="text-fheader">Mail Us:</h2>
              <div className="text-white flex flex-col py-1">
                <span>Flipkart Internet Private Limited,</span>
                <span>Buildings Alyssa, Begonia &</span>
                <span>Clove Embassy Tech Village,</span>
                <span>Outer Ring Road, Devarabeesanahalli Village,</span>
                <span>Bengaluru, 560103,</span>
                <span>Karnataka, India</span>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-fheader">Registered Office Address:</h2>
            <div className="text-white flex flex-col py-1">
              <span>Flipkart Internet Private Limited,</span>
              <span>Buildings Alyssa, Begonia &</span>
              <span>Clove Embassy Tech Village,</span>
              <span>Outer Ring Road, Devarabeesanahalli Village,</span>
              <span>Bengaluru, 560103,</span>
              <span>Karnataka, India</span>
              <span>CIN : U51109KA2012PTC066107</span>
              <span>
                Telephone:
                <Link href="tel:18002029898" className="text-blue-600 ml-2">
                  044-45614700
                </Link>{' '}
              </span>
            </div>
          </div>
        </div>
        <div className="bottom-0 z-40 w-full h-20 border-solid border-t border-fborder">
          <div className="flex justify-between text-white pt-6 mx-5">
            <div className="flex">
              <Image
                src="/img/footer/seller.svg"
                alt="Become a Seller"
                height={25}
                width={25}
              />
              <span className="ml-3 text-lg">Become a Seller</span>
            </div>
            <div className="flex">
              <Image
                src="/img/footer/Ads.svg"
                alt="Advertise"
                height={25}
                width={25}
              />
              <span className="ml-3 text-lg">Advertise</span>
            </div>
            <div className="flex">
              <Image
                src="/img/footer/giftcard.svg"
                alt="Gift Cards"
                height={25}
                width={25}
              />
              <span className="ml-3 text-lg">Gift Cards</span>
            </div>
            <div className="flex">
              <Image
                src="/img/footer/help.svg"
                alt="Help Center"
                height={25}
                width={25}
              />
              <span className="ml-3 text-lg">Help Center</span>
            </div>
            <div className="ml-3 text-lg">&copy 2007-2022 Flipkart.com</div>
            <div className="mt-2">
              <Image
                src="/img/footer/payment-method_69e7ec.svg"
                alt="Payments"
                height={50}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
