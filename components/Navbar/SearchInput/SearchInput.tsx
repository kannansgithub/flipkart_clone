import Image from 'next/image';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push({
      pathname: '/query',
      query: { q: searchQuery },
    });
  };
  return (
    <>
      {/* <form action={`/query/${searchQuery}`}> */}
      <form onSubmit={handleSubmit}>
        <div className="bg-white flex px-2 mt-1 h-11 rounded-sm">
          <input
            type="text"
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search for products, brands and more"
            title="Search for products, brands and more"
            className="w-90 px-2 focus:outline-none placeholder-slate-400 font-semibold"
          />
          <button type="submit">
            <Image
              src="/img/icon-search.svg"
              height={23}
              width={23}
              alt="search"
              className="mt-1 mr-2"
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
