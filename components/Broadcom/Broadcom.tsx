import Image from 'next/image';

type Props = {};

const Broadcom = (props: Props) => {
  return (
    <div className="flex text-gray-500 gap-2 mb-2">
      <div className="hover:text-primary cursor-pointer">Home</div>
      <Image
        src="/img/arrow_gray.svg"
        height={7}
        width={7}
        alt="arrow"
        className="rotate-180"
      />
      <div className="hover:text-primary cursor-pointer">
        Mobiles & Accessories
      </div>

      <Image
        src="/img/arrow_gray.svg"
        height={7}
        width={7}
        alt="arrow"
        className="rotate-180"
      />
      <div className="hover:text-primary cursor-pointer">Mobiles</div>
    </div>
  );
};

export default Broadcom;
