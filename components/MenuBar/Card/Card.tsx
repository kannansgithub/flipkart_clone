import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  imageUrl: string;
  sufixImageUrl?: string;
};

const Card = ({ title, imageUrl, sufixImageUrl }: Props) => {
  return (
    <>
      <div className="relative w-full h-40">
        <div className="relative flex flex-col h-full z-10 text-center align-middle  hover:text-primary cursor-pointer items-center">
          <Image src={imageUrl} height={110} width={80} alt={title} />
          <div className="flex">
            <p className="text-md font-semibold">{title}</p>

            {/* {sufixImageUrl ? (
              <Image
                src={sufixImageUrl}
                height={24}
                width={24}
                alt={title}
                className="hover:rotate-180 text-black"
              />
            ) : null} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
