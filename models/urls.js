const mongoose = require('mongoose')
const shortid = require('shortid')
const urlSchema = new mongoose.Schema({
    fullUrl:{
        type:String ,
        required:true
    },
    GeneratedUrl:{
        type:String ,
        required:true,
        default: shortid.generate
    }
})

module.exports = mongoose.model('url',urlSchema)