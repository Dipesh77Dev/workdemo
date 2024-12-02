// const express = require('express');

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const app = express();

const port = process.env.PORT

app.listen(port, () => {
    console.log("Our server is running on port:", port)
})

// database connection 

mongoose.connect(process.env.MONGODB_URI).then( () => {
    console.log("Database Connected Successfully")
}).catch(err => console.log("Database Connection Failed", err))