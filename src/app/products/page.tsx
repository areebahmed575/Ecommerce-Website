import React from 'react'
import { FC } from 'react'
import { responseType } from '@/app/page';
import { IProduct } from '@/app/page';
import CardAll from '@/app/components/CardAll';
import AllProductsCompo from '../components/AllProduct'
import { oneProductType } from '../components/utlis/productDataAndTypes';
async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22testing%22%5D`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}



const Female = async ({ params }: { params: { ftype: string } }) => {
  let res: responseType = await fetchAllProductsData();
  //console.log(res);
  
  return (
    <div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
      >
        {res.result.map((items: oneProductType, index: number) => (
          <CardAll key={index} singleProductData={items} />
        ))}
      </div>
    </div>
  )
}

export default Female