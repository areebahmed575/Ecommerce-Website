import React from 'react'
import { FC } from 'react'
import { responseType } from '@/app/page';
import { IProduct } from '@/app/page';
import CardAll from '@/app/components/CardAll';
async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-06-08/data/query/production?query=*%5B_type%20%3D%3D%20%22testing%22%20%26%26%20productTypes%5B0%5D%3D%3D%20%22Female%22%5D%0A`, {
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
  if (params.ftype !== "Female") {
    let orginalSortedDataOfParams = res.result.filter((items: IProduct) => items.productTypes[1] === params.ftype )
    res = { result: orginalSortedDataOfParams }
    //console.log(res);
  }
  return (
    <div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
      >
        {res.result.map((items: IProduct, index: number) => (
          <CardAll key={index} singleProductData={items} />
        ))}
      </div>
    </div>
  )
}

export default Female