import ProductItem from "./productItem";

export default function Products() {
  return (
    <div className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-scroll px-6 fixed top-96">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}
