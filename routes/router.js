const express = require('express')
const router= express()
const urls = require('../models/urls')

router.get('/',(req,res)=>{
   
    res.render('index.ejs',{shortUrl:null})
})

router.post('/',async(req,res)=>{
    await urls.create({fullUrl:req.body.FullUrl})
    const query = await urls.findOne({fullUrl:req.body.FullUrl}) 
    res.render('index.ejs',{shortUrl:query})
})

module.exports=router