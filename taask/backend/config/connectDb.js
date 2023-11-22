const mongoose=require("mongoose")
const connectDb =async()=>{
    await mongoose.connect("mongodb+srv://Ghazalashedev:Ghazala2023@cluster0.vu56axr.mongodb.net/test")
    console.log("Welcome your database is connected");
}
module.exports=connectDb;