import { NextRequest, NextResponse } from "next/server"

import {ObjectId} from 'mongodb'
import {client, mongo} from "../../../mongodb"
import { MongoClient, ServerApiVersion } from 'mongodb'


import analizeWebsite from "./analizeWebsite"

export async function POST(req: NextRequest) {
    let websites
    const url:URL = new URL(req.url)
    const _id:string|null = url.searchParams.get("id")

    if(_id == null) return NextResponse.json({message:"'id' is required"}, {status: 404})
    websites = await mongo((client:MongoClient)=>(client.db("Researches").collection("Websites Research").findOne({_id: new ObjectId(_id)})))
    if(websites == null) return NextResponse.json({message:"website not found"}, {status: 404})
    
    
    const websiteURL = new URL(`https:/${websites.url}`)
    analizeWebsite(websiteURL, websites.search_type)

    return NextResponse.json(websites)
}