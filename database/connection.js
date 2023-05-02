import mongoose from "mongoose";






export default async function connect(){
 await   mongoose.connect(process.env.MONGODB_URI)
 console.log('db connected')
}