import Image from 'next/image';

type Props = {
  imgUrl: string;
};

function CarouselItem({ imgUrl }: Props) {
  return (
    <Image
      src={imgUrl}
      alt="sliders"
      object-fit="cover"
      object-position="center"
      fill
    />
  );
}

export default CarouselItem;
