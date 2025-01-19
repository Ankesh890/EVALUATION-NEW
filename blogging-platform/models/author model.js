const mongoose = require('mongoose');


const authorschema = new mongoose.schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
});

const Author = mongoose.model('Author',authorschema);

Module.exports = Author;