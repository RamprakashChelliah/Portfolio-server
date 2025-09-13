// Import
const http = require('http');
const {app} = require('./app');

// Environment variable
const PORT = 3000;

const server = http.createServer(app);

server.listen(PORT)