import mongoose from "mongoose";
import express from "express"
import {user} from "./models/user.js"
import cors from "cors"
import bodyParser from "body-parser"

let conn =await mongoose.connect("mongodb+srv://abhinashpadhi79:Abhinash@cluster0.dfgsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const app=express()
const port=3000

app.use(cors())
app.use(bodyParser.json())

app.get("/", async (req,res)=>{
    res.send("This is the backend server.Keep it active to carry on the backend processes")
})



app.post("/userSignup", async (req,res)=>{
    let user1=req.body
    let newUser=await user.findOne({username:user1.username})
    console.log(user1)
    if(newUser){
        res.status(404).send("Username already exists")
        return;
    }
    else{
        newUser=await user.findOne({email:user1.email})
        if(newUser){
            res.status(404).send("Email has already been registered.Sign in.")
            return;
        }
        newUser=new user({username:user1.username,password:user1.password,email:user1.email,firstname:"First Name",lastname:"Last Name",dob:"DD/MM/YY",
            location:"Mumbai",activities:"Prefered fitness activities",gender:"Male",joinedOn:"DD/MM/YY",phoneNumber:"+91 XXXXXXXXXX"
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
})


app.post("/userSaveProfile",async (req,res)=>{
    let user1=req.body
    console.log(user1)
    let newUser=await user.findOne({username:user1.username})
    await user.updateOne({username:newUser.username},{$set: {
        firstname:user1.firstname,
        password:user1.password,
        email:user1.email,
        lastname:user1.lastname,
        dob:user1.dob,
        gender:user1.gender,
        location:user1.location,
        activities:user1.activities,
        joinedOn:user1.joinedOn,
        phoneNumber:user1.phoneNumber,
    }})
    res.json(await user.findOne({username:newUser.name}))
})



app.post("/userSignin",async (req,res)=>{
    let user1=req.body
    console.log(user1)
    let newUser=await user.findOne({email:user1.email})
    if(!newUser){
        res.status(404).send("Email has not been registered yet.Sign up first.")
    }
    else{
        if(user1.password!==newUser.password){
            res.status(404).send("Incorrect Password.Try again.")
        }
        else{
            res.status(200).json(newUser)
            console.log(newUser)
        }
    }
})



app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})