import Image from 'next/image';

type Props = {};

const HelpImage = (props: Props) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <div className="text-md font-semibold mt-7">Need help?</div>
      <div className="flex justify-between">
        <div className="text-xl font-semibold text-primary py-1">
          Help me decide
        </div>
        <Image
          className="rotate-180 mx-2 mt-1"
          src="/img/arrow_blue.svg"
          height={8}
          width={8}
          alt=""
        />
      </div>
      <Image
        className="my-4"
        src="/img/buying-guide-illustration.png"
        height={130}
        width={130}
        alt=""
      />
    </div>
  );
};

export default HelpImage;
