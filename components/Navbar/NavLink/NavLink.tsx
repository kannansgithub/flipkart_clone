import Image from 'next/image';
import Link from 'next/link';

type Props = {
  text: string;
  href: string;
  prefixIconUrl?: string;
  sufixIcon?: string;
  items?: number;
};

function NavLink({ text, href, prefixIconUrl, sufixIcon, items }: Props) {
  return (
    <>
      <div className="flex gap-1 text-white font-semibold my-3 text-lg">
        {items ? (
          <div className="bg-red-500 flex justify-center items-center h-5 w-5 rounded-full p-2 text-sm">
            {items}
          </div>
        ) : null}

        {prefixIconUrl ? (
          <Image src={prefixIconUrl} height={20} width={20} alt={text} />
        ) : null}
        <Link href={href}>{text}</Link>
        {sufixIcon ? (
          <Image
            src={sufixIcon}
            height={24}
            width={24}
            alt={text}
            className="hover:rotate-180"
          />
        ) : null}
      </div>
    </>
  );
}

export default NavLink;
