const express=require('express')
const colors=require('colors')
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//dotenv config

dotenv.config();
connectDB();

const app=express();



//middleware

app.use(express.json());
app.use(morgan('dev'));

//routes

app.use('/',require('./routes/userRouter'));

//listen server

const port= 8080;

app.listen(port,()=>{
    console.log(`Server is running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.bgCyan.white);
})