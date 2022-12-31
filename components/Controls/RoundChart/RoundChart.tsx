type Props = {
  title: string;
  rating: number;
};

const RoundChart = ({ title, rating }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="h-24 w-24 rounded-full bg-green-600 flex justify-center items-center">
          <div className="h-22 w-22 rounded-full bg-white flex justify-center items-center">
            <div className="text-xl font-bold">{rating}</div>
          </div>
        </div>
        <p className="text-xl font-semibold">{title}</p>
      </div>
    </>
  );
};

export default RoundChart;
