var io;
var gameSocket;
// store all active socket connections
var activeSession = [];

const initGame = (sio, socket) => {
	io = sio;
	gameSocket = socket;
}

exports.initGame = initGame;