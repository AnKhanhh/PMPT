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
                        <h1
                            style={{
                                textAlign: "center",
                                marginTop:
                                    String(window.innerHeight / 3) + "px",
                            }}
                        >
                            Please Enter Your Name:
                        </h1>
                        <input
                            style={{
								display: "block",
                                margin: "auto",
                                width: "240px",
                                marginTop: "62px",
                            }}
                            ref={this.textArea}
                            onInput={this.typingUserName}
                        ></input>
                        <button
                            style={{
								display: "block",
                                margin: "auto",
                                width: "120px",
                                marginTop: "32px",
                            }}
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
