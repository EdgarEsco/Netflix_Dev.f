const mongoose = require('mongoose');

const Schema = mongoose.Schema
const UserSchema = new Schema({
    "name":{
        type:String,
        required:true
    },
    "last_name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true,
        unique:true
    },
    "password":{
        type:String,
        required:true
    }, 
    "GENDER":{
        type:String,
        required:true
    },    
    "is_active":{
        type:Boolean,
        default:true
    },
    
    "create_at":{
        type:Date,
        defaul:new Date()
    }
    
},{collection:"Users",timestamps:true});


export default mongoose.model('Users',UserSchema);