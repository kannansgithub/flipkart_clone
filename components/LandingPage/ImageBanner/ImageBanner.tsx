import Image from 'next/image';

type Props = {
  imageList: string[];
  redirectUrl: string;
  className?: string;
};

const ImageBanner = ({ imageList, className }: Props) => {
  return (
    <div className="flex relative h-full">
      {imageList.map((img, index) => {
        return (
          <div className={`relative w-full mx-2 ${className}`} key={index}>
            <Image src={img} alt="banner" loading="lazy" fill object-fill />
          </div>
        );
      })}
    </div>
  );
};

export default ImageBanner;
