import React from 'react'
import {FC} from 'react'
import { Arraynavbar, type } from './Arraynavbar'
import Link from 'next/link'
import { HiOutlineChevronDown } from "react-icons/hi"
import Dropdown from './Dropdown'
import {useState} from 'react'

const Expand:FC<{item:type }>= ({item}) => {
    const [isExpand,setExpand]=useState(false) 
    const [isTimeout,setTimeOut]=useState<boolean>(false) 
    function handleExpand(){
        setExpand(!isExpand)
        setTimeout(()=>{
            setTimeOut(!isTimeout)
        },100);
    }
  return (

        <li className={`${isExpand ? "h-48" : "h-12"}  flex flex-col    rounded-md list-none `}>
        <div onClick={handleExpand}  className='flex py-2 px-3 justify-between item-center hover:bg-purple-400 duration-300'>
        <Link href={item.href}>{item.label}</Link>
        {item.isDropDown ? <HiOutlineChevronDown className="mt-1 rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
        </div>
         <div className='flex flex-col space-y-2 mt-2'>
       {isExpand && item.isDropDownData?.map((subitem: type, index: number)=>(
           <Link key={index} href={subitem.href} className='px-5 py-1 hover:bg-gray-50 rounded-md duration-300'> {subitem.label}</Link>
           ))}
        </div>
        </li>    
  )
}

export default Expand