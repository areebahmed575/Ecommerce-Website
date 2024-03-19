'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
const Jwellery = () => {
    const router=useRouter()
    return (
        <div className='px-1 text-gray-700 mt-36'>
            <div className=' md:text-5xl font-bold flex md:justify-end justify-start  text-4xl py-4 '>
                <h6 className='max-w-[27rem]'>Unique and Authentic Vintage Designer Jewellery</h6>
            </div>
            <div className='flex flex-col md:flex-row justify-between  py-4 mt-2 gap-5 ' >
                <div className='relative grid grid-cols-2 grid-rows-2 gap-6 basis-1/2 lg:gap-10'>
                    <div className='absolute text-slate-200 -z-50'>
                        <h1 className='font-bold text-5xl md:text-[7.3rem] leading-[5.9rem]'>Different from others</h1>
                    </div>

                    <div className='max-w-[13rem] space-y-2'>
                        <h6 className='font-semibold text-lg'>Using Good Quality Materials</h6>
                        <p className='text-lg leading-5 '>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='max-w-[13rem] space-y-2'>
                        <h6 className='font-semibold text-lg'>100% Handmade Products</h6>
                        <p className='text-lg leading-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='max-w-[13rem] space-y-2'>
                        <h6 className='font-semibold text-lg'>Modern Fashion Design</h6>
                        <p className='text-lg leading-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='max-w-[13rem] space-y-2'>
                        <h6 className='font-semibold text-lg'>Discount for Orders</h6>
                        <p className='text-lg leading-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row basis-1/2'>
                    <div className='w-full px-4 lg:px-0  lg:w-80'>
                        <Image src={"/jelleri.webp"} height={1000} width={1000} alt={"jwellery"} />
                    </div>

                    <div className='p-6 space-y-6 md:space-y-4'>
                        <p style={{ wordSpacing: "0.8rem" }} className="h-[90%] lg:max-w-[15rem]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <button className="text-white bg-gray-900 rounded-md py-2 px-6" onClick={()=>router.push("/products")}>See All Products</button>


                    </div>


                </div>


            </div>

        </div>
    )
}

export default Jwellery