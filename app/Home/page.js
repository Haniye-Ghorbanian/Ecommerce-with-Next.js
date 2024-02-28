"use client";

import Header from "./components/header";
import Products from "./components/products";
import FooterMenu from "./components/footerMenu";
import { Provider } from "react-redux";
import store from "../store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="relative">
        <Header />
        <Products />
        <FooterMenu />
      </div>
    </Provider>
  );
}
