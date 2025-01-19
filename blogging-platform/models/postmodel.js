const mongoose = require('mongoose');

const postschema = new mongoose.schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    author:{type:String,required:true},
}, {timestamps: true });

const post = mongoose.model('post',postschema);

Module.exports = post;