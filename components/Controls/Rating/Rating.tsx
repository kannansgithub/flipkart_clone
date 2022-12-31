type Props = {
  rating: number;
  rattingCount: string;
  reviewCount: string;
};

const Rating = ({ rating, rattingCount, reviewCount }: Props) => {
  return (
    <>
      <div className=" bg-rating text-white px-2 rounded-md">
        {rating.toFixed(1)}★
      </div>
      <div className="text-fheader font-semibold text-lg">
        {rattingCount} Ratings & {reviewCount} Reviews
      </div>
    </>
  );
};

export default Rating;
