import mongoose from 'mongoose';

const Schema = mongoose.Schema
const MovieSchema = new Schema({
    "title":{
        type:String,
        required:true
    },
    "director":{
        type:String,
    },
    "categories":{
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


export default mongoose.model('Movies',MovieSchema);