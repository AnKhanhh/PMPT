import io from 'socket.io-client';

const url = 'http://localhost:8000';
const socket = io(url);
var mySocketId;

// receive response from server after create game
socket.on('createNewGame', status => {
	console.log('New game created. Your name:' + status.userName + ', game Id:' + status.gameId + ', socket: ' + status.mySocketId);
	mySocketId = status.mySocketId;
})

export { socket, mySocketId }