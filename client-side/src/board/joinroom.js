import React from "react";
import JoinGame from "./joingame";
import ChessGame from "../chess/ui/chessgame";

class JoinRoom extends React.Component {
    state = {
        didGetUserName: false,
        inputText: "",
    };

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }

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
                            className="btn btn-primary"
                            disabled={!(this.state.inputText.length > 0)}
                            onClick={() => {
                                this.setState({ didGetUserName: true });
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
