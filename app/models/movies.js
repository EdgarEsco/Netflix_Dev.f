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
        enum: ["Comedia", "Drama", "Acción", "Romántica", "Terror","Deportes"]
    },
    "sinopsis":{
        type:String,
        required:true
    },      
    "poster":{
        type:String,
    },    
    "video_url":{
        type:String,
        required:true
    },
    
});


module.exports =  mongoose.model('Movies',MovieSchema);