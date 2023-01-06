import Image from 'next/image';
import RoundChart from '../RoundChart/RoundChart';
import Stars from '../Stars/Stars';
type Props = {
  average: string;
  fiveStar: number;
  fourStar: number;
  threeStar: number;
  twoStar: number;
  oneStar: number;
  totalReview: string;
  totalrating: number;
  cameraRating: number;
  batteryRating: number;
  displayRating: number;
  designRating: number;
};

const Review = ({
  average,
  fiveStar,
  fourStar,
  threeStar,
  twoStar,
  oneStar,
  totalReview,
  totalrating,
  cameraRating,
  batteryRating,
  displayRating,
  designRating,
}: Props) => {
  const getPercentage = (curValue: number): string => {
    return ((curValue / totalrating) * 100).toFixed(0);
  };
  return (
    <>
      <div className="border border-gray-300 p-5 mt-3">
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">Ratings & Reviews</div>
          <button className="p-4 border border-gray-200 shadow px-6 font-semibold">
            Rate Product
          </button>
        </div>
        <div className="w-full flex ">
          <div className="w-2/3">
            <div className="w-full flex gap-6">
              <div className="w-2/5 justify-center items-center text-center">
                <div className="text-4xl font-bold">{average}★</div>
                <div className="text-fheader font-semibold text-md">
                  {totalrating} Ratings & {totalReview} Reviews
                </div>
              </div>
              <div className="w-3/5">
                <div>
                  <Stars
                    count={fiveStar}
                    color="green-600"
                    star="5"
                    percentage={getPercentage(fiveStar)}
                  />
                  <Stars
                    count={fourStar}
                    color="green-600"
                    star="4"
                    percentage={getPercentage(fourStar)}
                  />
                  <Stars
                    count={threeStar}
                    color="green-600"
                    star="3"
                    percentage={getPercentage(threeStar)}
                  />
                  <Stars
                    count={twoStar}
                    color="orange-400"
                    star="2"
                    percentage={getPercentage(twoStar)}
                  />
                  <Stars
                    count={oneStar}
                    color="red-400"
                    star="1"
                    percentage={getPercentage(oneStar)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <RoundChart title="Camera" rating={cameraRating} />
              <RoundChart title="Battery" rating={batteryRating} />
              <RoundChart title="Display" rating={displayRating} />
              <RoundChart title="Design" rating={designRating} />
            </div>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </>
  );
};

export default Review;
