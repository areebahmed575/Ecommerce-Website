import React from 'react'
import { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image';
import { IProduct } from '../page';
import { client } from "@/lib/sanityClient"; 
import imageUrlBuilder from "@sanity/image-url";
const Card: FC<{ data: Array<IProduct> }> = ({ data }) => {
    const builder = imageUrlBuilder(client);

    function urlFor(source: any) {
        return builder.image(source);
    }


  return (
    <div>
      <div className='space-y-4'>
        <div className="text-center space-y-3">
          <p className="text-blue-800 text-sm">PROMOTIONS</p>
          <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
        </div>

        <div className='flex justify-center  ' >
          {data.map((item, index: number) => (
            <div key={index} className=' max-w-sm space-y-1 min-w-[24rem]  hover:scale-110 duration-300'>

              <div className='w-full'>

                <Image width={300} height={300} src={urlFor(item.image).url()} alt="product" />
              </div>

              <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>
                <h6>{item.productName}</h6>
                <p>${item.price}</p>
              </div>


            </div>



          ))}

        </div>
      </div>

    </div>
  )
}

export default Card