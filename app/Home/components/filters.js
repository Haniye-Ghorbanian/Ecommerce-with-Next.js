export default function Filters() {
  return (
    <div className="mb-4 w-full flex items-center  h-16 px-6 overflow-scroll">
      <div>
        <input type="checkbox" className="hidden" id="checkbox" />
        <label
          htmlFor="checkbox"
          className="flex items-center justify-center h-9 w-24 px-3 py-2 bg-white border border-solid border-gray-200 text-center mr-3 rounded-md cursor-pointer transition-colors duration-200 group"
        >
          electron
        </label>
      </div>
    </div>
  );
}
