var io;
var gameSocket;

var activeSession = [];

const initGame = (sio, socket) => {
    /**
     * initializeGame sets up all the event handlers.
     */

    io = sio;
    gameSocket = socket;
    activeSession.push(gameSocket);

    gameSocket.on("disconnect", handleDisconnect);
    gameSocket.on("new move", handleMove);
    gameSocket.on("createNewGame", handleCreateSession);
    gameSocket.on("playerJoinGame", handleJoinsGame);
    gameSocket.on("request username", handleRequest);
    gameSocket.on("received userName", handleReceived);
};

function handleJoinsGame(idData) {
    var sock = this;

    var room = io.sockets.adapter.rooms[idData.gameId];

    if (room === undefined) {
        this.emit("status", "This game session does not exist.");
        return;
    }
    if (room.length < 2) {
        idData.mySocketId = sock.id;

        sock.join(idData.gameId);

        console.log(room.length);

        if (room.length === 2) {
            io.sockets.in(idData.gameId).emit("start game", idData.userName);
        }

        io.sockets.in(idData.gameId).emit("playerJoinedRoom", idData);
    } else {
        this.emit("status", "There are already 2 players.");
    }
}

function handleCreateSession(gameId) {
    this.emit("createNewGame", { gameId: gameId, mySocketId: this.id });

    this.join(gameId);
}

function handleMove(move) {
    const gameId = move.gameId;

    io.to(gameId).emit("opponent move", move);
}

function handleDisconnect() {
    var i = activeSession.indexOf(gameSocket);
    activeSession.splice(i, 1);
}

function handleRequest(gameId) {
    io.to(gameId).emit("give userName", this.id);
}

function handleReceived(data) {
    data.socketId = this.id;
    io.to(data.gameId).emit("get Opponent UserName", data);
}

exports.initGame = initGame;
