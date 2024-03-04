import ProductDataContainer from "./productDataContainer";
import ProductPageButtons from "./productPageButtons";
import ProductSizeInputs from "./productSizeInputs";

export default function ProductPageWrapper({path}) {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-evenly space-y-3 pb-6 pt-20 px-8">
        <ProductDataContainer path={path}/>
        <ProductSizeInputs />
        <ProductPageButtons />
    </div>
  );
}
