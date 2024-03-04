export default function ProductPageButtons() {
  return (
    <>
      <div className="w-full h-1/6 flex flex-row-reverse items-center justify-between px-1">
        <button className=" w-3/5 h-2/5 bg-main text-white font-extrabold text-md flex items-center justify-center rounded-md px-8 ">
          Add to Cart
        </button>

        <button className="">
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="m17 21-5-4-5 4V3.9c0-.2 0-.5.2-.6l.6-.3h8.4c.2 0 .4 0 .6.3l.2.6V21Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
