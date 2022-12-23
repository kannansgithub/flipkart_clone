import Link from 'next/link';
type Props = {
  rediectUrl?: string;
};
const ViewAllButton = ({ rediectUrl }: Props) => {
  return (
    <Link href={rediectUrl ?? '/'}>
      <button className="px-10 h-10 rounded-sm bg-primary text-white mt-1 text-xl pb-1">
        View All
      </button>
    </Link>
  );
};
export default ViewAllButton;
