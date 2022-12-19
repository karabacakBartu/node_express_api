import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    surname:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    phoneNumber:{
        type:String,
        required:true,
    },

    birthDate:{
        type:Date,
        required:true
    },

    gender:{
        type:String,
        required:true,
    },

    bookRights:{
        type:Number,
        default:6,
        required:false,
    },

    takenBooks:{
        type:Array,
        default:[],
        require:false,
    },

});



export default mongoose.model('users',userSchema);