import React from "react";
import { Redirect } from "react-router-dom";
import uuid from "uuid/v4";
import { ColorContext } from "../context/colorcontext";
const socket = require("../connection/socket").socket;

class CreateNewGame extends React.Component {
    state = {
        inputText: "",
        gameId: "",
        didGetUserName: false,
    };
    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }
    // generate unique room id and send it to server to create new room
    send = () => {
        const newGameRoomId = uuid();

        this.setState({
            gameId: newGameRoomId,
        });
        socket.emit("createNewGame", newGameRoomId);
    };

    typingUserName = () => {
        const typedText = this.textArea.current.value;

        this.setState({
            inputText: typedText,
        });
    };

    render() {
        return (
            <>
                {this.state.didGetUserName ? (
                    <Redirect to={"/game/" + this.state.gameId}>
                        <button className="btn btn-success">Start Game</button>
                    </Redirect>
                ) : (
                    <div>
                        <h1>Your Username:</h1>

                        <input
                            ref={this.textArea}
                            onInput={this.typingUserName}
                        ></input>
                        <button
                            className="btn btn-primary"
                            // when press submit, send request to server with uuid generated as room id

                            disabled={!(this.state.inputText.length > 0)}
                            onClick={() => {
                                this.props.didRedirect();
                                this.props.setUserName(this.state.inputText);
                                this.setState({
                                    didGetUserName: true,
                                });
                                this.send();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </>
        );
    }
}

const Onboard = (props) => {
    const color = React.useContext(ColorContext);

    return (
        <CreateNewGame
            didRedirect={color.playerDidRedirect}
            setUserName={props.setUserName}
        />
    );
};
export default Onboard;
