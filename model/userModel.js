const mongoose = require('mongoose')

const userModel = new mongoose.Schema(
    {
        firstName :{
        type : String,
        required : true
    },

    lastName :{
        type : String,
        required : true
    },

    email :{
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    }},
    {
        collection:'user-details'
    }
)

module.exports = mongoose.model('user-details',userModel)