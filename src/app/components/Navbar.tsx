"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Arraynavbar, type } from './Arraynavbar'
import Link from 'next/link'
import { BiSearch } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineChevronDown } from "react-icons/hi"
import Dropdown from './Dropdown'
import Navbarmobile from './Navbarmobile'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { useRouter } from 'next/navigation'
//import ContextWrapper from '@/global/context'
//import Cartstate from './Cartstate'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { UserButton } from "@clerk/nextjs";
import { fetchData } from '@/redux/feature/cartSlice'

const Navbar = ({userId}: {userId: string}) => {

  const [cart, setCart] = useState<number>(0)
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState("");

  
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(fetchData(userId));

  },[dispatch,userId]);

  function handleSerachCalledFunc(e: any) {
    if (e.key === "Enter" && e.keyCode === 13) {
      router.push(`/search/${searchQuery}`);
    }
  }

  const totalItems = useAppSelector((state) => state.cart.totalQuantity);
  return (

    <div className="sticky top-0 backdrop-blur bg-opacityDownColor bg-white z-50">
      <div className=' py-5 flex justify-between items-center space-x-12'>
        <div className='w-36 flex-shrink-0'>
          <Link href="/"><Image src={"/Logo.webp"} alt={"image"} width={500} height={500} /> </Link>
        </div>

        <div className='hidden lg:flex justify-between items-center w-full '>

          <ul className='flex space-x-5 font-medium text-lg'>

            {Arraynavbar.map((item: type, index: number) => (
              <li key={index} className='flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group'>
                <Link href={item.href}> {item.label}</Link>
                {item.isDropDown ? <HiOutlineChevronDown className="mt-1 rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}><Dropdown item={item} /></div>}

              </li>

            ))}
          </ul>
          <div className='border flex  items-center text-gray-600 px-3 rounded-md'>
            <Link href={`/search/${searchQuery}`}><BiSearch /></Link>
            <input value={searchQuery}
              onKeyDown={handleSerachCalledFunc}
              onChange={(e) => setSearchQuery(e.target.value)}
              type='text'
              placeholder='Search in our store'
              className='focus:outline-none pl-1 pr-5  flex-grow py-1 w-80' />
          </div>
          {/* <Link href={"/cart"}>
              <Cartstate />
            </Link> */}

          <div>
          <UserButton afterSignOutUrl="/" />
          </div> 


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
        <div onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <div className='flex lg:hidden'>
            <RxCross2 size={25} />
          </div>
            : <div className='flex lg:hidden'>
              <GiHamburgerMenu size={25} />
            </div>
          }
        </div>

      </div>
      {navbarOpen && <Navbarmobile />}
    </div>

  )
}

export default Navbar