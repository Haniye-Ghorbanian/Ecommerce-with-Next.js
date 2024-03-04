"use client";

import Header from "../../components/header/header";
import Products from "@/components/products/products";
import FooterMenu from "../../components/footer/footerMenu";
import { Provider } from "react-redux";
import store from "../../store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="relative">
        <Header />
        <Products />
        
      </div>
    </Provider>
  );
}
