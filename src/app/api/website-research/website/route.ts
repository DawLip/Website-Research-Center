import {client} from "../../mongodb"

export async function GET(request: Request) {
    const data=[]
    try{
        await client.connect()
        const cursor = await client.db("Researches").collection("Websites Research").find()
        for await (const doc of cursor){
            data.push(doc)
        }
    }finally{
        await client.close()
    }

    return Response.json({ message: 'Hello World', data })
}