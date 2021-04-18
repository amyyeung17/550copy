const config = require('./db-config.js');
const mysql = require('mysql');

config.connectionLimit = 10;
const connection = mysql.createPool(config);

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello')
})

module.exports = router