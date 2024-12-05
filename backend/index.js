// const express = require('express');

import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import AuthRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.use(express.json()) // send data in json

app.use(cookieParser())

const port = process.env.PORT

app.listen(port, () => {
  console.log('Our server is running on port:', port)
})

// database connection

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database Connected Successfully')
  })
  .catch(err => console.log('Database Connection Failed', err))

// routes

app.use('/api/auth', AuthRoute)
