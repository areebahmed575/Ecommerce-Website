"use client";

//import { Product } from "@/interfaces";
import { Product, cartAction } from '@/redux/feature/cartSlice'
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { useAppDispatch } from '@/redux/store'
import { urlForImage } from "../../../sanity/lib/image";
import { BsCart2 } from "react-icons/bs";
import { client } from "@/lib/sanityClient"; 
import imageUrlBuilder from "@sanity/image-url";
type IProps = {
  product: Product;
  qty: number;
  user_id : string
};

const AddtoCartProduct = (props: IProps) => {

  const [qty,setQty] = useState(1)
  const dispatch = useAppDispatch();
  //const [quantity, setQuantity] = useState(1);

  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source); 
  }

    const subtract = () => {
        if (qty > 1) {
          setQty(qty - 1);
        }
      };


    const GetDataFromDb = async() => {
      const res = await fetch(`/api/cart/${props.user_id}`);
      if(!res.ok){
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();

      return data;


    };    




      const handleAddToCart = async () => {
        const res = await fetch(`/api/cart`, {
          method: "POST",
          body: JSON.stringify({
            product_id: props.product._id,
            quantity: qty,
            image: urlFor(props.product.image).url(),
            product_name: props.product.productName,
            subcat: props.product.productTypes[1],
            price: props.product.price,
            total_price: props.product.price * qty,
          }),
        });
    
      };


      const handleCart = async () => {
        
        try {
          const cartData = await GetDataFromDb();
          const existingItem = cartData.cartItems.find(
            (item: any) => item._id === props.product._id
          );
    
          if (existingItem) {
            const newQuantity = existingItem.quantity + qty;
            const newPrice = props.product.price * newQuantity;
            const res = await fetch(`/api/cart`,
              {
                method: "PUT",
                body: JSON.stringify({
                  product_id: props.product._id,
                  quantity: newQuantity,
                  price: newPrice,
                }),
              }
            );
    
            if (!res.ok) {
              throw new Error("Failed to update data");
            }
          } else {
            await handleAddToCart();
          }
        } catch (error) {
          console.log(error);
        }
    
        
      };  





    const addToCart = () =>{
  
        toast.promise(handleCart(), {
          loading: "Adding Data to Cart",
          success:"Data added to Cart",
          error: "Failed to add data"
        })
        dispatch(cartAction.addToCart({product: props.product,quantity: qty}))
    }

    const addtoCart = () => {
      toast.promise(handleAddToCart(), {
        loading: "Adding To Cart",
        success: "Product added To Cart",
        error: "Failed to Add Product to cart",
      });
      dispatch(cartAction.addToCart({ product: props.product, quantity: qty }));
    };

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