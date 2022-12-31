import RoundChart from '../RoundChart/RoundChart';

type Props = {
  star: string;
  percentage: string;
  color: string;
  count: number;
};

const Stars = ({ star, percentage, color, count }: Props) => {
  return (
    <div className="flex gap-3 my-1">
      <div>{star}★</div>
      <div className="w-40">
        <div className="bg-lightgray w-full h-2 rounded-lg mt-2">
          <div
            className={`bg-${color} h-2 rounded-lg`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <div className="ml-1 text-gray-500 text-md">{count}</div>
    </div>
  );
};

export default Stars;
