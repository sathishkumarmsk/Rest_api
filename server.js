require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))




app.use(express.json())

const subscribersRouter = require('./subscribers')
app.use('/subscribers', subscribersRouter)

// app.listen(3005, () => console.log('server started'))


app.listen(3000, () => console.log('server started'))