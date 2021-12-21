import React from "react";
import JoinGame from "./joingame";
import ChessGame from "../chess/ui/chessgame";

class JoinRoom extends React.Component {
    state = {
        gotUserName: false,
        inputText: "",
    };

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }

    typingUserName = () => {
		const typed = this.textArea.current.value
        this.setState({
            inputText: typed
        });
    };

    render() {
        return (
            <>
                {this.state.gotUserName ? (
                    <>
                        <JoinGame
                            userName={this.state.inputText}
                            isCreator={false}
                        />
                        <ChessGame myUserName={this.state.inputText} />
                    </>
                ) : (
                    <div>
                        <h1>Your Name:</h1>
                        <input
                            ref={this.textArea}
                            onInput={this.typingUserName}
                        ></input>
                        <button
                            disabled={!(this.state.inputText.length > 0)}
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
