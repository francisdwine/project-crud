import { NextResponse,NextRequest } from "next/server";
import findAll from '../../controllers/users.controller'
export async function GET(){

    return findAll()

}
export async function POST(req:Request){
   const {name,message,email}=await req.json()
   
    return NextResponse.json({
       name,message,email
    })

}