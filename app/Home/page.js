'use client'

import Header from "./components/header";
import Products from "./components/products";
import FooterMenu from "./components/footerMenu";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Products />
      <FooterMenu />
    </div>
  );
}
