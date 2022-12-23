import Image from 'next/image';
import ViewAllButton from '../ViewAllButton/ViewAllButton';

type Props = {
  title: string;
  imgUrl: string;
  redirectionUrl?: string;
};

const Header = ({ title, imgUrl, redirectionUrl }: Props) => {
  return (
    <div className="h-full w-full relative flex flex-col">
      <div className="absolute w-full h-36 bottom-0 z-20">
        <Image
          src={imgUrl}
          fill
          object-fill
          object-position="center"
          alt="product category"
        />
      </div>

      <div className="h-4/5 flex">
        <div className="m-auto text-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl">{title}</h2>
            <div className="">
              <ViewAllButton rediectUrl={redirectionUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
