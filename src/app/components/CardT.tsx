import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";
import { client } from "@/lib/sanityClient"; 
import imageUrlBuilder from "@sanity/image-url";
import { oneProductType } from "./utlis/productDataAndTypes";


const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

const CardT: FC<{ singleProductData: oneProductType }> = ({
    singleProductData,
  }) => {
    //console.log("singleProductData",singleProductData)
    return (
      <div className=" space-y-3 select-none hover:scale-110 duration-300">
        <div className="relative w-full">
          <div className="absolute inset-0 z-10" />
          <Image
            width={1000}
            height={1000}
            src={urlFor(singleProductData.image)
              .url()}
            alt={"image"}
          />
        </div>
        <div className="space-y-1 text-gray-600 font-semibold text-lg select-none">
          <Link href={`/catalog/${singleProductData.slug.current}`}>
            <h6>{singleProductData.productName}</h6>
            <p>${singleProductData.price}</p>
          </Link>
        </div>
      </div>
    );
  };
  
  export default CardT;