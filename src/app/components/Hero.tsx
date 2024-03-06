'use client'
import React from 'react'
import Image from 'next/image'
import { BsCart2 } from "react-icons/bs"
import { heroGirl } from './image/image'
import { useRouter } from 'next/navigation';

const text= "Start \n Shopping"
const Hero = () => {
    const router=useRouter()
    return (
        <div className='py-5 flex item-center justify-between px-2'>
            <div className="space-y-6 max-w-sm">
                <button aria-label="redirect the user to sale page" className='rounded-md bg-blue-400 text-purple-900 font-medium px-4 py-2'>Sale 70%</button>
                <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">An Industrial Take on Streetwear</h1>
                <p className="text-gray-700">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <button aria-label="redirect the user to sale page" className='flex gap-3 rounded-sm ring ring-slate-800 bg-gray-900 text-white font-semibold px-5 py-3 ' onClick={()=>router.push("/products")}>
                    <BsCart2 />
                   <p className="whitehspace-pre leading-5"> {text} </p>
                </button>
                <div className='flex gap-4'>
                    <div className="w-14 md:w-28">
                    <Image src={"/Featured1.webp"} alt={"logo1"} width={100} height={100}/>
                    </div>
                    <div className="w-14 md:w-28">
                    <Image src={"/Featured2.webp"} alt={"logo2"} width={100} height={100}/>
                    </div>
                    <div className="w-14 md:w-28">
                    <Image src={"/Featured3.webp"} alt={"logo3"} width={100} height={100}/>
                    </div>
                    <div className="w-14 md:w-28">
                    <Image src={"/Featured4.webp"} alt={"logo4"} width={100} height={100}/>
                    </div>
                </div>
            </div>

            <div className='hidden md:flex bg-primary rounded-full'>

                <Image src={heroGirl} alt={"image"} />

            </div>

        </div>
    )
}

export default Hero