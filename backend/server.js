const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const path = require('path')

const Routers = require('./routes')


const app = express()

const port = process.env.PORT || 3000


app.use(express.static('dist'))
app.use(express.json())
app.get('/', (req, res) => res.send('HELLO'))
app.get('/', Routers)


app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, () => {
  console.log('listening on 3000')
})