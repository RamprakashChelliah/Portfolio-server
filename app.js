// 3rd party Import
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


// local import
const { emailRouter } = require('./routes/email.router');

// main function
const app = express();

// set cors
const corsOptions = {
  origin: [
    "http://localhost:4200",                   // Angular local dev
    "https://ramprakashchelliah.github.io"        // your GitHub Pages domain
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

// use middelware to log our request
app.use(morgan('combined'));

// add middleware to parse request as JSON format
app.use(express.json());

// routes
app.use('/email', emailRouter);

// export
module.exports = {app};