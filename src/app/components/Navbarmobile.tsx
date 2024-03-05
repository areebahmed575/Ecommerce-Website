import { Arraynavbar, type } from './Arraynavbar'
import Link from 'next/link'
import { HiOutlineChevronDown } from "react-icons/hi"
import Dropdown from './Dropdown'
import {useState} from 'react'
import Expand from "./Expand"
const Navbarmobile = () => {
    return (
        <div>
            <div className='w-full  bg-gray-100 px-6 py-3'>

                {Arraynavbar.map((item: type, index: number) => (
                
                    <Expand key={index} item={item}/>
                                    
             ))}   

            </div>

        </div>

    )
}

export default Navbarmobile