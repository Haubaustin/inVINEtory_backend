const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const UserRouter = require('./routes/UserRouter')
const BottleRouter = require('./routes/BottleRouter')
const StorageRouter = require('./routes/StorageRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/storage', StorageRouter)
app.use('/bottle', BottleRouter)
app.use('/user', UserRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))