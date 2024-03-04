import ProductDataContainer from "./productDataContainer";
import ProductPageButtons from "./productPageButtons";
import ProductSizeInputs from "./productSizeInputs";

export default function ProductPageWrapper({path}) {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-between space-y-3 p-8">
        <ProductDataContainer path={path}/>
        <ProductSizeInputs />
        <ProductPageButtons />
    </div>
  );
}
