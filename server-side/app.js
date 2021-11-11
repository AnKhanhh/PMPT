const express = require('express');
const http = require('http');
const io = require('socket.io')(server);
const gameLogic = require('./processes');
const app = express();

const server = http.createServer(app);

io.on('connection',(client) => {
	gameLogic.initGame(io, client);
});

server.listen(process.env.PORT || 8000);