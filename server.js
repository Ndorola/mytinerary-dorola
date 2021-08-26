const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
require('dotenv').config()
require('./config/database')

//initializations
const app = express()

//middleware
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded()) //para que cuando el usuario se registre pueda interpretar los datos


app.use('/api', router)

app.listen(4000, () => console.log('Server listening on port 4000'))