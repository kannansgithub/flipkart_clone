type Props = {
  title: string;
  className?: string;
};

const ProductTitle = ({ title, className }: Props) => {
  return (
    <div className={`text-2xl font-semibold ${className ? className : null}`}>
      {title}
    </div>
  );
};

export default ProductTitle;
