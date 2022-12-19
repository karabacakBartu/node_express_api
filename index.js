import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()
import userRoutes from './routes/user.route.js'

const app = express();
const PORT=3000;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection

db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('Connected to Database...'))

app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    console.log('[TEST]!');
 
    res.send('selamın aleyküm.');
});

app.listen(PORT,()=>console.log('Server running...'));

