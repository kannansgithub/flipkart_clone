type Props = {
  onClick?: React.MouseEventHandler<Element>;
  className?: string;
};
const defaultProps: Props = {
  className: 'items-center justify-center',
};
const NextButton = ({ onClick, className }: Props) => {
  return (
    <>
      <button
        type="button"
        className={`absolute right-0 z-30 flex h-full group focus:outline-none cursor-default drop-shadow ${className}`}
        onClick={onClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-8 rounded-l-md py-16 px-2 sm:w-10 sm:h-10 bg-white group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </>
  );
};
NextButton.defaultProps = defaultProps;
export default NextButton;
