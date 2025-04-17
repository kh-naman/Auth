import mongoose from "mongoose";

const db = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to mongo db");
        
    })
    .catch(()=>{
        console.log("Not able to connect to mongo db");
        
    })
}

export default db