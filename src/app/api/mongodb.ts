import { NextRequest, NextResponse } from "next/server"
import "../../../envConfig"

import { MongoClient, ServerApiVersion } from 'mongodb'
const MONGO_URI:string = process.env.MONGO_URI || ""

export const client:MongoClient = new MongoClient(MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export const mongo = async (callback:Function)=>{
  try{
    await client.connect()
    return await callback(client)
  }catch(err){
      console.error("Database error: ", err)
      return NextResponse.json({message:"Database error"}, {status: 500})
  }finally{
      await client.close()
  }
}