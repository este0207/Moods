'use server'
import prisma from "../../../lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req) {
    const userData = await req.json()
    console.log(userData)
    const userEmail = userData.email
    const userLastConnection = userData.lastconnection
    if(!userData){
        return NextResponse.json({status:"User data missing"})
    }
    
    else{
        try{
            const updateUser = await prisma.user.update({
                where: {
                  email: userEmail,
                },
                data: {
                  lastconnection: userLastConnection, 
                },
              })
              if(updateUser){
                return NextResponse.json({status:"sucessefuly updated last connection"})
              }
              else{
                return NextResponse.json({status:"couldn't update last connection"})
              }

        }catch(error){
            return NextResponse.json({status:"Error while fetching users"})
        }
    }


    
}