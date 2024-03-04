export default function ProductSkeleton() {
  return (
    <div className="w-full bg-white rounded-md p-4 shadow-md animate-pulse">
      <div className="w-full h-64 bg-gray-300 rounded-md mb-3"></div>
      <div className="text-md text-gray-400 font-light bg-gray-300 w-2/3 h-4 mb-1 rounded"></div>
      <div className="w-full flex items-center justify-between mt-3">
        <div className="w-3/4 h-8 bg-gray-300 rounded"></div>
        <div className="w-1/4 h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

 
