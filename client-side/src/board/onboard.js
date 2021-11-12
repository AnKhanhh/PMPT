import React from "react";
const socket = require("../connection/socket").socket;

class createNewGame extends React.Component {
    state = {
        gameId: "",
    };
    send = () => {
        // create unique room id
        const newRoomId = uuid();
        this.setState({
            gameId: newRoomId,
        });
        socket.emit("createNewGame", newRoomId);
    };
    render() {
        return (
            <>
                {
                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={this.send()}
                        >
                            Send
                        </button>
                    </div>
                }
            </>
        );
    }
}

export default createNewGame;
