
import mongoose, { Schema } from 'mongoose';



const booksSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
    },

    author:{
        type:String,
        required:true,
    },

    kind:{
        type:String,
        required:true
    },

    vol:{
        type:Number,
        required:true,
    },

    releaseDate:{
        type:Date,
        required:true,
    }
});


export default mongoose.model('books',booksSchema)
