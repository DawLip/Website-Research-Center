import { FindCursor, MongoClient, ServerApiVersion, WithId } from 'mongodb'
import {mongo} from "../../mongodb"

export async function GET(req: Request) {
    const websites:Document[]=[]
    await mongo(async (client:MongoClient)=>{
        const cursor:FindCursor = await client.db("Researches").collection("Websites Research").find()
        for await (const doc of cursor){
            websites.push(doc)
        }
    })


    return Response.json(websites)
}