import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    firstname: String,
    lastname: String,
    dob: String,
    location: String,
    gender: String,
    activities: String,
    joinedOn: String,
    phoneNumber: String,
})
export const user=mongoose.model('userschema',userSchema)
