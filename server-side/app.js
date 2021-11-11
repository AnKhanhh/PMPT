const express = require('express');
const http = require('http');
const io = require('socket.io')(server);
const app = express();

const server = http.createServer(app);

io.on('connection',);

server.listen(process.env.PORT || 8000);