const express = require("express");
const connectDB = require("./configuration/db")
const router = require("./router/userrouter")
const cors =require("cors")
const app=express()

connectDB()

app.use(express.json())
app.use(cors())
app.use('/',router)



const PORT = process.env.PORT||7789
app.listen(PORT,()=>console.log(`server is running ${PORT}`))