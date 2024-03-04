"use client"

import ProductDataContainer from "@/components/product/productDataContainer";
import { Provider } from "react-redux";
import store from "@/store";


export default function ProductPage({ params }) {

    return (
        <Provider store={store}>
            <ProductDataContainer path={params.productSlug} />
        </Provider>
    )
}