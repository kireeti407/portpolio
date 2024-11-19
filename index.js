const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv = require('dotenv')
const bodyparser=require('body-parser')
const feed_data=require('./model')

const app=express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyparser.json())
dotenv.config()

const usern=process.env.user_name;
const passw=process.env.password;
const bd=`mongodb+srv://${usern}:${passw}@lbase.axdxirs.mongodb.net/?retryWrites=true&w=majority&appName=LBASE`
mongoose.connect(bd)
.then(()=>{console.log("connected")})

app.post("/",async(req,res)=>{
    const data= await feed_data.create(req.body)
})

app.listen(4000)
