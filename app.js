const express = require('express');
const app = express();
const connectionDb = require('./db/db.config.js');

connectionDb();

app.get('/',(req,res)=> res.send('oi'))

module.exports = app