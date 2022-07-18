// express packages and database import
const express = require('express');
const bodyParser = require('body-parser');

const api = require('./api');
const morgan = require('morgan');
const cors = require('cors');

//declare myslq initialization
const mysqldbconnection = require('./db');

// initilize express application
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('dev'))
app.use(express.static('static'));
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/api', api);
app.use( (req, res) => {
     const err = new Error('Not Found')
     err.status = 404
     res.json(err)
})

app.listen(3000, () => console.log('Server started at port : 3000'));
//app.use('/employees', employeeController);