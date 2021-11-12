import io from 'socket.io-client';

const url = 'http://localhost:8000';
const socket = io(url);

// receive response from server after create game
socket.on('createNewGame', status => {
	console.log('new game created. Name:' + status.userName + ', game Id:' + status.gameId + ', socket: ' + status.mySocketId);
})

export { socket }