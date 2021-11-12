var io;
var gameSocket;
// store all active socket connections in an array
var activeSession = [];

const initGame = (sio, socket) => {
	io = sio;
	gameSocket = socket;
	activeSession.push(gameSocket);
	gameSocket.on('disconnect', handleDisconnect);
	gameSocket.on('createNewGame', handleCreateSession);
}

function handleDisconnect() {
	let i = activeSession.indexOf(gameSocket);
	activeSession.splice(i, 1);
}
function handleCreateSession(gameId) {
// send room id and socket id back to client, for later uses
	this.emit('createNewGame', {gameId: gameId, mySocketId: this.id});
	this.join(gameId);
}
exports.initGame = initGame;