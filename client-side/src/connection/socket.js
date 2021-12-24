import io from "socket.io-client";

const URL = "http://localhost:8000";
const socket = io(URL);
var mySocketId;

socket.on("createNewGame", (status) => {
    console.log(
        "New game has been created! Username: " +
            status.userName +
            ",game id: " +
            status.gameId +
            "socket: " +
            status.mySocketId
    );
    mySocketId = status.mySocketId;
});

export { socket, mySocketId };
