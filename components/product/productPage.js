import ProductDataContainer from "./productDataContainer";
import ProductPageButtons from "./productPageButtons";
import ProductSizeInputs from "./productSizeInputs";

export default function ProductPageWrapper({path}) {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-around space-y-3  pt-12 px-8">
        <ProductDataContainer path={path}/>
        <ProductSizeInputs />
        <ProductPageButtons />
    </div>
  );
}
