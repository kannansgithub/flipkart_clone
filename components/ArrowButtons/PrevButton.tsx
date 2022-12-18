type Props = {
  onClick?: React.MouseEventHandler<Element>;
};

function PrevButton({ onClick }: Props) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full group focus:outline-none cursor-default"
      >
        <span className="inline-flex items-center justify-center w-15 h-10 rounded-r-md py-16 px-2 group-focus:outline-none drop-shadow-lg bg-slate-100">
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
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
    </>
  );
}

export default PrevButton;
