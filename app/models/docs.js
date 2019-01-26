import mongoose from 'mongoose';

const Schema = mongoose.Schema
const DocsSchema = new Schema({
    "title":{
        type:String,
        required:true
    },
    "director":{
        type:String,
    },
    "category":{
        type:String,
        required:true
    },
    "sinopsis":{
        type:String,
        required:true
    },      
    "poster":{
        type:String,
    },    
    "video":{
        type:String,
        required:true
    },
    
});


module.exports =  mongoose.model('Docs', DocsSchema);