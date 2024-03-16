import { Cart, cartTable, db } from "@/lib/drizzle";
//import { db } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request:NextRequest,{params:{userId}}:{params : {userId : string}}) =>{

    try{
        if(!userId){
            throw new Error("UserId does not exists");
        }
        else{
            const res:Cart[] = await db.select().from(cartTable).where(eq(cartTable.user_id, userId));
            const cartItems = res.map((item) => ({
                _id: item.product_id,
                name: item.product_name,
                price: item.price,
                totalPrice: item.price * item.quantity,
                subcat: item.subcat,
                image: item.image,
                userId: item.user_id,
                quantity: item.quantity,
              }));  
            
              const totalQuantity = cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              );
              const totalAmount = cartItems.reduce(
                (total, item) => total + item.totalPrice,
                0
              );

              return NextResponse.json({ cartItems, totalQuantity, totalAmount },
                {status:200}
               );
        }
    }
    catch(error){
        console.log(error);
        return NextResponse.json({Message: "error"},{status:500});
    }
}    

