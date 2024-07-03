const mongoose = require("mongoose");
const connectDB = ()=>{
     try{
        mongoose.connect("mongodb://127.0.0.1:27017/rahul").then((res)=>{
    console.log("database connected")
        }).catch((error)=>{
          console.log("databse disconnected")
        })
     }catch(error){
        console.log("db-error",error)
     }
}
module.exports = connectDB
