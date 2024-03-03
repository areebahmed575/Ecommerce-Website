import React from 'react'
import Image from 'next/image'
const ProductText = () => {
  return (
    <div className='py-16 px-2 space-y-5'>
    <div className='text-center space-y-3'>
        <h3 className='text-blue-800 text-sm'>
            PROMOTIONS
        </h3>
        <p className='text-gray-800 text-3xl font-bold'>
            OUR PROMOTIONS EVENTS
        </p>
      
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6 text-gray-800'>
        <div className='w-full px-12 flex-col items-center justify-between  sm:flex-row col-span-1 md:col-span-2 bg-cat1 flex'>
          <div className='max-w-[13rem] py-8 '>
            <h3 className='text-3xl font-extrabold'>GET UP TO 60%</h3>
            <p className='text-xl'>For the Summer Season</p>
          </div>
          <div className='w-64'>
            <Image width={1000} height={1000} src={"/event1.webp"} alt={"image 1"}  />

          </div>

        </div>
        <div className='w-full h-full row-span-1 md:row-span-2 flex flex-col  items-center  bg-cat3 p-4'>
          <div>
             <p>Flex Sweatshirt</p>
             <p><del>$100.00</del>
              &nbsp;&nbsp;&nbsp;
             <b><ins>$75.00</ins></b></p>
          </div>
          <div className='w-64'>
          <Image width={1000} height={1000} src={"/event2.webp"} alt={"image 2"}  />
          </div>

        </div>
        <div className='w-full h-full row-span-1 md:row-span-2 flex flex-col  items-center bg-cat4 p-4'>
        <div>
             <p>Flex Push Button Bomber</p>
             <p><del>$$225.00</del> <b><ins>$190.00</ins></b></p>
          </div>
          <div className='w-64'>
          <Image width={1000} height={1000} src={"/event3.webp"} alt={"image 3"}  />
          </div>

        </div>
        <div className='text-white  w-full py-9 col-auto md:col-span-2 bg-cat2 flex flex-col justify-center items-center'> 
          <h3 className='text-4xl font-extrabold' >GET 30% Off</h3>
          
          <p>USE PROMO CODE</p>
          
            <button aria-label="Redirect user to Dine Week End Sale" className='py-1 px-8 bg-gray-700 rounded-lg tracking-widest '>DINEWEEKENDSALE</button>
          


        </div>
        
        
    </div>
    </div>
  )
}

export default ProductText