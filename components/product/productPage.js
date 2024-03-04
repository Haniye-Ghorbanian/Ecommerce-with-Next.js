import ProductDataContainer from "./productDataContainer";

export default function ProductPageWrapper() {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-between space-y-3 p-8">
        <ProductDataContainer />
    </div>
  );
}
