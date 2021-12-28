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

server.listen(process.env.PORT || 3000);
console.log("listening on " + (process.env.PORT || 3000));
