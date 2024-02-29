

export default function ProductsSkeleton() {
  return (
    <div className="w-full flex items-center justify-start border border-solid border-gray-200 h-36 rounded-md p-4 animate-pulse">
      <div className="w-2/5 h-full bg-gray-200 rounded-md"></div>
      <div className="h-full flex flex-col items-start justify-around py-1 px-5 flex-1">
        <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded-md mb-2"></div>
        <div className="w-1/3 h-4 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
}
