import { cookies } from "next/headers"
import { NextResponse } from "next/server";

import * as jose from "jose"
export const GET= async() =>{
 const jwt =cookies().get("token")?.value;
 console.log("token",jwt);
 const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
  )
  
 if(!jwt){
    return NextResponse.redirect("/login")
 } 
 else{
    const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret)
      console.log(payload);
      console.log(protectedHeader);
 }
    //Fetch user data from the database
    return NextResponse.json({ name:'Ariba!'})
}
//get req m body nh passkrsakty