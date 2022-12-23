type Props = {
  title: string;
  totalItems: number;
};

const HeaderItem = ({ title, totalItems }: Props) => {
  return (
    <div className="border-b-2">
      <div className="flex flex-col items-center gap-4">
        <h2 className="uppercase font-semibold text-2xl mt-7">{title}</h2>
        <div className="text-fheader mb-7">{totalItems} Items</div>
      </div>
    </div>
  );
};

export default HeaderItem;
