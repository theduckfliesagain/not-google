// Required Modules
const express = require('express');
const cors = require('cors');

// Required files
// const data = require('./data');
const resultRoutes = require('./components/results');


const app = express();

app.use(cors());

app.use('/results', resultRoutes);

app.get('/', (req, res) => {
    res.send('Noodle API');
})


module.exports = app;