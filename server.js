const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
require('dotenv').config()
require('./config/database')
// primero dotenv desoues config data base

const app = express()

//middleware
app.use(cors())
app.use(express.json())


app.use('/api', router)

app.listen(4000, () => console.log('Server listening on port 4000'))