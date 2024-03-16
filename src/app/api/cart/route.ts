// routes.ts
import { addToCart, cartTable, db } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";


export const POST = async (request: NextRequest) => {
  //const user_id = "123378injc";
  const { userId } = auth();
  const req: addToCart = await request.json();

  try {
    if (req) {
      const insertedData = await db
        .insert(cartTable)
        .values({
          user_id: userId as string,
          product_id: req.product_id,
          product_name: req.product_name,
          quantity: req.quantity,
          image: req.image,
          price: req.price,
          subcat: req.subcat,
          total_price: req.total_price,
        })
        .returning(); // Return all columns

      console.log("Inserted Data:", insertedData);

      return NextResponse.json({ Message: "Data added to DB" }, { status: 200 });
    } else {
      throw new Error("Failed to insert Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};




export const PUT = async (request: NextRequest) => {
  //const user_id = "123378injc";
  const {userId} = auth();

  const data: addToCart = await request.json();

  try {
    if (data && userId) {
      await db
        .update(cartTable)
        .set({
          quantity: data.quantity,
          total_price: data.price,
        })
        .where(and(eq(cartTable.user_id, userId), eq(cartTable.product_id, data.product_id))).returning();
      return NextResponse.json({ Mesaage: "Data updated" }, { status: 200 }); 
    } else {
      throw new Error("Failed to update Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({Message: "error"},{status:500});
  }
};


export const DELETE  = async (request:NextRequest) =>{
  //const user_id = "123378injc";
  const {userId} = auth()
  const Url = request.nextUrl

  try{
    if (Url.searchParams.has("product_id") && userId){
      const product_id = Url.searchParams.get("product_id");
      const res = await db.delete(cartTable).where(and(eq(cartTable.user_id, userId), eq(cartTable.product_id, product_id as string))).returning();
      return NextResponse.json({Message: "Data deleted"}, {status:200});
    }
    else{
      if (Url.searchParams.has("product_id")){
        throw new Error("Login Required");
      }
      else{
        throw new Error("Product Id Required")
      }
    }  
    
    
  }
  catch(error){
    console.log(error);
    return NextResponse.json({Message: "error"}, {status:500});
  }


}