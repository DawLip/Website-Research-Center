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