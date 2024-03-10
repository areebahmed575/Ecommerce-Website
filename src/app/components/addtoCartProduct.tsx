"use client";

//import { Product } from "@/interfaces";
import { Product, cartAction } from '@/redux/feature/cartSlice'
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { useAppDispatch } from '@/redux/store'
import { urlForImage } from "../../../sanity/lib/image";
import { BsCart2 } from "react-icons/bs";

type IProps = {
  product: Product;
  qty: number;
};

const AddtoCartProduct = (props: IProps) => {

  const [qty,setQty] = useState(1)
  const dispatch = useAppDispatch();
  //const [quantity, setQuantity] = useState(1);

    const subtract = () => {
        if (qty > 1) {
          setQty(qty - 1);
        }
      };


    const addToCart = () =>{
        dispatch(cartAction.addToCart({product: props.product,quantity: qty}))
    }

    // function incrementTheQuantity() {
    //     setQuantity(quantity + 1);
    
    //   };
    
    //   function decrementTheQuantity() {
    //     if (quantity !== 0) {
    //       setQuantity(quantity - 1);
    //     }
    //   };
    //   const notification = (title: string[]) => {
    //     toast(` ${quantity} ${title} added to Cart`, {
    //       icon: '👏',
    //       position: "top-right"
    //     })
    //   };
    
      const notificationError = (title: string) => {
        toast(title, {
          position: "top-right"
        })
      };
    



  return (
    <>
      <div className="flex space-x-7">
                <p className="font-semibold text-xl text-gray-800">Quantity:</p>
                <div className="flex gap-2 items-center text-lg">
                  <div
                    onClick={subtract}
                    className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200">-</div>
                  <p>{qty}</p>
                  <div
                     onClick={() => setQty(qty + 1)}
                    className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800">+</div>
                </div>
              </div>
              <div className="flex gap-x-8 items-center">
                <button onClick={addToCart} className="flex items-center text-white bg-gray-900 border border-gray-500 px-4 py-2">
                  <BsCart2 />
                  &nbsp;
                  &nbsp;
                  Add to Cart
                </button>
               
              </div>
      <Toaster />
    </>
  );
};
export default AddtoCartProduct;