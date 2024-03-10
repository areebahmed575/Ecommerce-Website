// import { carContext } from '@/global/context'
// import React, { useState } from 'react'
// import { BsCart2 } from 'react-icons/bs'
// import { useContext } from "react"
// import { useAppDispatch } from '@/redux/store'
// import { Product, cartAction } from '@/redux/feature/cartSlice'



// const Cartstate = () => {
//     //let quantity = 0
//     const [qty,setQty] = useState(1)
//     const dispatch = useAppDispatch();

    


//     const addToCart = () =>{
//         dispatch(cartAction.addToCart({porduct: props.porduct,quantity: qty}))
//     }
//     return (
//         <div className="flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
//             <div
//                 className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center items-center"
//             >
//                 {/* {quantity} */}
//             </div>
//             <BsCart2 size={24}  />
//         </div>
//     )
// }

// export default Cartstate