const express = require('express')
const mongoConnection = require('./db')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 5000
const routePath = require('./routes/portfolioRoutes')

mongoConnection()

app.use(cors())
app.use(express.json())
app.use(express.static('uploads'));
app.use('/',routePath)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})