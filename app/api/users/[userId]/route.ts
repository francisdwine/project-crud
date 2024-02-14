import { NextResponse } from "next/server";
export async function GET(request:Request,context:any){
    // get url parameters
    const{params}=context;
    const userId:string=params.userId

    return NextResponse.json({
        messages:`${userId}`,
    })

}
export async function POST(req:Request){
   const {name,message,email}=await req.json()
   
    return NextResponse.json({
       name,message,email
    })

}