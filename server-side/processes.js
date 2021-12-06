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
	gameSocket.on('playerJoinGame', handleJoinGame)
}

function handleDisconnect() {
	let i = activeSession.indexOf(gameSocket);
	activeSession.splice(i, 1);
}
function handleCreateSession(gameId) {
// emit room id and socket id back to client
	this.emit('createNewGame', {gameId: gameId, mySocketId: this.id});
	this.join(gameId);
}
function handleJoinGame(idData) {
	let playerSocket = this
	let room = io.sockets.adapter.rooms[idData.gameId]

	// catch exception room dont exist
	if(room === undefined) {
		this.emit('status', 'game room not exist')
		return
	}
	//  catch exception already have 2 client
	if(room.length < 2) {
		idData.mySocketId = playerSocket.id
		playerSocket.join(idData.gameId)
	

		// if(room.length === 2) {
		// 	io.sockets.in(idData.gameId).emit('start game', idData.userName)
		// }
		// io.sockets.in(idData.gameId).emit('playerJoinedRoom', idData)
	} else {
		this.emit('status', 'there are already 2 players.')
	}
}

exports.initGame = initGame;