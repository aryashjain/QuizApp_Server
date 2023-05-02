import mongoose from "mongoose";
let MONGODB_URI="mongodb+srv://aryashjain:aryashkapassword@cluster0.0xpomkk.mongodb.net/?retryWrites=true&w=majority"





export default async function connect(){
 await   mongoose.connect(MONGODB_URI)
 console.log('db connected')
}