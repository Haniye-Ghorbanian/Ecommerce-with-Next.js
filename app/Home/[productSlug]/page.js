"use client"

import ProductDataContainer from "@/components/product/productDataContainer";
import ProductPageWrapper from "@/components/product/productPage";
import { Provider } from "react-redux";
import store from "@/store";


export default function ProductPage({ params }) {

    return (
        <Provider store={store}>
            <ProductPageWrapper path={params.productSlug} />
        </Provider>
    )
}