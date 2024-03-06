import React from 'react'
import Image from 'next/image'
import { RiDeleteBinLine } from "react-icons/ri";
import CartComp from '../CartParent/CartChild'; 
import ContextWrapper from '@/global/context';

async function fatchAllStoreProducts() {
    let res = await fetch(`https://9nf6zuxd.api.sanity.io/v2023-06-08/data/query/production?query=*[_type == 'testing']`, {
        cache: "no-store",
    })
    return res.json();
};
const page = async () => {
    let allProducts = await fatchAllStoreProducts();
    //console.log(allProducts)
    return (
        <ContextWrapper>
            <CartComp allProductsOfStore={allProducts.result} />
        </ContextWrapper>



    )
}

export default page