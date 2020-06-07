const express = require('express')
const app = express()
const router = require('./routes/router')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/URLS', 
{useNewUrlParser: true ,useUnifiedTopology:true},()=>{
    console.log("connection established")
})


app.use(express.urlencoded({extended:false}))
app.use(router)

app.listen((process.env.PORT || 5000 ),()=>{
    console.log(`app is listening on port ${5000}`)
});