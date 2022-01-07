const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const gameLogic = require("./processes");
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (client) => {
    gameLogic.initGame(io, client);
});

server.listen(process.env.PORT || 8000);
// app.get('/', (req, res) => {
// 	res.send('listening on '  + (process.env.PORT || 8000))
// });
