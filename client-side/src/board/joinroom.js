import React from "react";
import JoinGame from "./joingame";
import ChessGame from "../chess/ui/chessgame";

class JoinRoom extends React.Component {
    state = {
        gotUserName: false,
        input: "",
    };

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }

    typingUserName = () => {
        this.setState({
            input: this.textArea.current.value,
        });
    };

    render() {
        return (
            <>
                {this.state.gotUserName ? (
                    <div>
                        <JoinGame
                            userName={this.state.input}
                            isCreator={false}
                        />
                        <ChessGame myUserName={this.state.input} />
                    </div>
                ) : (
                    <div>
                        <h1>Your Name:</h1>
                        <input
                            ref={this.textArea}
                            onInput={this.typingUserName}
                        ></input>
                        <button
                            disabled={!(this.state.input.length > 0)}
                            onClick={() => {
                                this.setState({ gotUserName: true });
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

export default JoinRoom;
