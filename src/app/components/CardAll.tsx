import React from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { IProduct } from '../page'
import { FC } from 'react'
import Link from 'next/link'
import { client } from "@/lib/sanityClient"; 
import imageUrlBuilder from "@sanity/image-url";
import { oneProductType } from "./utlis/productDataAndTypes";

const CardAll: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
    const builder = imageUrlBuilder(client);

    function urlFor(source: any) {
       return builder.image(source);
    }



    return (
        <div className='mx-auto w-[11rem] md:w-[16rem] space-y-3 duration-300'>
            <div className='relative w-full'>
                <div className='absolute inset-0 z-10 max-h-[200px] object-cover object-top' />
                <Image width={300} height={300} src={urlFor(singleProductData.image).url()} alt="product" />
            </div>
            <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>
                <Link href={`/catalog/${singleProductData.slug.current}`}>
                    <h6>{singleProductData.productName}</h6>
                    <p className='text-sm text-pink-500'>{singleProductData.productTypes[0]}</p>
                    <p>${singleProductData.price}</p>
                </Link>
            </div>
        </div>
    )
}

export default CardAll