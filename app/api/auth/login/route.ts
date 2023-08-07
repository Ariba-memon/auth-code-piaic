import { NextResponse,NextRequest } from "next/server";
import * as jose from 'jose'
import {cookies} from "next/headers"
export const POST = async(request:NextRequest) =>{
const body = await request.json().catch(()=>null);
if(body.email==="admin" && body.password==="admin"){
    const secret = new TextEncoder().encode(
        'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
      )
      const alg = 'HS256'
      console.log("secret",secret);
      
      const jwt = await new jose.SignJWT({ email:body.email})
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h')
        .sign(secret)
      
        cookies().set("token",jwt,{
            httpOnly:true,
            
        }); //cookies set hrhy hain
        return NextResponse.json({message:"Loginsucess"});
}
return NextResponse.json({message:"Hello World"})
}
//status code represent api approved h ya nh 200 mtlb sucess ful hogaye h
//404 api exist nh krta
//server crash hogaya h 500 error handle nh kia howa code break hrha h