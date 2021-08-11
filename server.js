const cors = require('cors')

const express = require('express')

const app = express()

app.use(cors())

// fetchear

app.listen(4000, () => console.log('Server listening on port 4000'))