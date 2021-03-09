// Required Modules
const express = require('express');
const cors = require('cors');
// Data
const data = require('./data');


const app = express();
app.use(cors());

app.get('/', (req, res) => {

    res.send('Noodle API');
})

app.get('/results/', (req, res) => {
    
    res.send('Noodle API');
})

module.exports = app;