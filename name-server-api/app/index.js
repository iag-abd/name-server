require('dotenv').config()
import shortenRoutes from './routes/shorten.route'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const logger = require('morgan')
const port = process.env.PORT || 8080
const connectionString = process.env.CONNECTIONSTRING
const SourceMapSupport = require('source-map-support')

app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const conn = mongoose.connect(connectionString)
conn.then((db) => {
  console.log('APP: Connected to MongoDB')
})

// add Source Map Support
SourceMapSupport.install()

app.get('/', (req, res) => {
  res.sendFile('views/index.html', {
      root: __dirname
  })
})

// allow-cors
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/', shortenRoutes)

app.listen(port, () => console.log(`Name Server listening on port ${port}!`))
