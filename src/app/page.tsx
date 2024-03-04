import Image from 'next/image'
import Hero from './components/Hero'
import ProductText from './components/ProductText'
import { client } from '@/lib/sanityClient';
import { urlForImage } from '@/sanity/lib/image';
import { Image as Iimage } from 'sanity';
import Link from 'next/link';
import Jwellery from './components/Jwellery';
//import Card from './components/Card';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CardT from './components/CardT';
import { oneProductType } from './components/utlis/productDataAndTypes';
import ProductsCarousel from './components/ProductsCarousel';


async function fetchProduct() {
  const res = await client.fetch(`*[_type == "testing"]{
    productName,
    price,
    slug,
    quantity,
    image,
    description,
    size

  }`);

  return res
}

interface assetImageType {
  _type: string,
  _ref: string,
};
export interface imagesType {
  asset: assetImageType,
  _type: string,
  alt: string,
  _key: string,
};
export interface IProduct {
  slug: any,
  quantity: number,
  _rev: string,
  _type: string,
  productName: string,
  _createdAt: string,
  _id: string,
  _updatedAt: string,
  description: any,
  productTypes: Array<string>,
  size: Array<string>,
  price: number,
  //image: Iimage,
  image: imagesType[];

};
export interface imagesType {
  asset: assetImageType;
  _type: string;
  alt: string;
  _key: string;
}
export interface responseType {
  result: Array<IProduct>
}
export default async function Home() {
  let result: Array<oneProductType> = await fetchProduct();
  console.log(result)


  return (
    <div>


      <Hero />
      <ProductText />
      {/* <Card data={result} /> */}
      {/* {result.map((product, index) => (
        <CardT key={index} data={product} />
      ))} */}
      <ProductsCarousel ProductData={result} />
      <Jwellery />
      <Newsletter />




    </div>


  )
}



