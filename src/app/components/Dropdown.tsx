import React from 'react'
import { FC } from 'react'
import { Arraynavbar, type } from './Arraynavbar'
import Link from 'next/link'
const Dropdown:FC<{item:type}> = ({item}) => {
  return (
    <div>
        <ul >

        {item.isDropDownData?.map((item:type,index:number)=>(
            <li key={index} className="hover:ml-2 group-hover:duration-300 -translate-y-7 group-hover:translate-y-0">

              <Link href={item.href}> {item.label}</Link>
            </li>

        ))}
        </ul>
      
    </div>
  )
}

export default Dropdown