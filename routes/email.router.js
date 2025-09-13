// 3rd party Import
const express = require('express');

// local Import
const {sendMail} = require('./email.controller');

// creat route
const emailRouter = express.Router();

// routes
emailRouter.post('/', sendMail);

// Export the router properly
module.exports = { emailRouter };