import { Arraynavbar, type } from './Arraynavbar'
import Link from 'next/link'
import { HiOutlineChevronDown } from "react-icons/hi"
import Dropdown from './Dropdown'
import { useState } from 'react'
import Expand from "./Expand"
import { BsCart2 } from "react-icons/bs"
import { useAppSelector } from '@/redux/store'
import { UserButton } from "@clerk/nextjs";
const Navbarmobile = () => {
    const totalItems = useAppSelector((state) => state.cart.totalQuantity);
    return (

        <div className='w-full  bg-gray-100 px-6 py-3 space-y-3'>

            <div className='flex justify-center items-center'>
                <UserButton afterSignOutUrl="/" />
            </div>


            <div className='flex justify-center items-center'>


                <Link href={"/cart"}>
                    <div className="flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">


                        <div
                            className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center items-center"
                        >
                            {totalItems ? totalItems : 0}
                        </div>
                        <BsCart2 size={24} />
                    </div>
                </Link>

            </div>

            {Arraynavbar.map((item: type, index: number) => (
                <div className='flex justify-center items-center'>

                    <Expand key={index} item={item} />

                </div>


            ))}




        </div>



    )
}

export default Navbarmobile