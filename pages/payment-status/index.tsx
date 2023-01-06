import Image from 'next/image';
import React from 'react';

const index = () => {
  return (
    <div className="h-full w-full bg-white mx-4">
      <div className="flex flex-col gap-5 justify-center items-center p-5 my-5">
        <div className="text-2xl font-bold text-green-600">
          Your Order Received, Go and Track your order status
        </div>
        <Image
          src="/img/tracking.jpg"
          alt="tracking"
          height={500}
          width={500}
        />
        <button className="bg-secondary uppercase py-5 text-white px-24 font-semibold text-xl rounded-md">
          Track my order
        </button>
      </div>
    </div>
  );
};

export default index;
