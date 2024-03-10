"use client"
import React, { use, useContext, useState } from 'react'
import { IProduct, imagesType } from '../page'
import { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { BsCart2 } from "react-icons/bs";
//import { carContext } from '../../global/context'
import PortableText from "react-portable-text";
import toast, { Toaster } from 'react-hot-toast'
import { client } from "@/lib/sanityClient"; 
import imageUrlBuilder from "@sanity/image-url";
import { oneProductType } from "./utlis/productDataAndTypes";
import AddtoCartProduct from './addtoCartProduct'
import { Product } from '@/redux/feature/cartSlice'

const ProductDetail: FC<{ item: Array<Product> }> = ({ item }) => {
  //let { cartArray, userData, dispatch } = useContext(carContext)

  const [onClickImage, setClickImage] = useState<string>()
  const [quantity, setQuantity] = useState(1);
  let productPrice = item.map((item) => (
    item.price

  ))

  const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

  let productIdCart = item.map((item) => (
    item._id

  ))
  let productName = item.map((item) => (
    item.productName

  ))
  function incrementTheQuantity() {
    setQuantity(quantity + 1);

  };

  function decrementTheQuantity() {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };
  const notification = (title: string[]) => {
    toast(` ${quantity} ${title} added to Cart`, {
      icon: '👏',
      position: "top-right"
    })
  };

  const notificationError = (title: string) => {
    toast(title, {
      position: "top-right"
    })
  };




  // function handleAddToCart() {
  //   let isExsits = cartArray.some((elem: any) => elem.product_id === productIdCart);

  //   if (userData) {
  //     let dataToAddInCart = {
  //       product_id: productIdCart,
  //       quantity: quantity,
  //       user_id: userData.uuid,
  //       price: productPrice,
  //     };
  //     if (!isExsits) {
  //       dispatch("addToCart", dataToAddInCart);
  //     } else {
  //       dispatch("updateCart", dataToAddInCart)
  //     }
  //     notification(productName);
  //   } else {
  //     notificationError("Please login first");
  //   }
  // };

  return (
    <div>
      <Toaster />
      {item.map((item, index: number) => (

        <div key={index}>
          <div className='flex sm:gap-x-4 md:gap-x-8'>

            <div className='w-16 md:w-24'>

              <Image width={300} height={300} src={urlFor(item.image).url()} alt="product" />


            </div>
            <div className="w-[17rem] md:w-[33rem] flex flex-wrap-0">
              <Image width={500} height={500} src={urlFor(item.image).url()} alt="product" />

            </div>
            <div className="p-6 space-y-8">
              <div>
                <h1 className="text-3xl text-gray-700">{item.productName}</h1>
                <p className="text-pink-600 text-xl font-medium">{item.productTypes[1]}</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-700">Select Size</p>
                <div className="flex gap-2 text-pink-600">
                  {item.size.map((subItem: string, index: number) => (
                    <div key={index} className="hover:shadow-xl font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">{subItem}</div>
                  ))}
                </div>
              </div>


              <p className="text-2xl font-semibold">Price: ${item.price}{".00"}</p>
              <AddtoCartProduct product={item} qty={1}  />
              
              </div>

              



          </div><div>
            <div className="relative py-14 px-2 border-b border-gray-400">
              <h2 className="top-0 absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50 ">Overview</h2>
              <p className="font-semibold text-xl">Product Information</p>

            </div>



            <div className="text-gray-600">
              <div className="flex px-2 py-4">
                <div className="w-80">
                  <h3 className="font-semibold">PRODUCT DETAILS</h3>
                </div>
                <p>
                  <PortableText content={item.description} />
                </p>
              </div>
              <div className="flex px-2 py-8">
                <div className="w-80">
                  <h3 className="font-semibold">PRODUCT CARE</h3>
                </div>
                <ul className="pl-3 list-disc font-semibold text-gray-900">
                  <li>Hand wash using cold water.</li>
                  <li>Do not using bleach.</li>
                  <li>Hang it to dry.</li>
                  <li>Iron on low temperature.</li>
                </ul>
              </div>
            </div>
            <div className="h-16" />
          </div>
        </div>


      ))}

    </div>

  )
}

export default ProductDetail