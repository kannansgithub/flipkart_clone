import Image from 'next/image';

const SearchInput = () => {
  return (
    <>
      <div className="bg-white flex px-2 mt-1 h-10 rounded-sm">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          title="Search for products, brands and more"
          className="w-96 px-2 focus:outline-none placeholder-slate-400 font-semibold"
        />
        <Image
          src="/img/icon-search.svg"
          height={25}
          width={25}
          alt="search"
          className="mt-1 mr-2"
        />
      </div>
    </>
  );
};

export default SearchInput;
