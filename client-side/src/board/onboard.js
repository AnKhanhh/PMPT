import React from "react";
import { Redirect } from "react-router";
// import { v4 } from "uuid";
import uuid from 'uuid/v4';
const socket = require("../connection/socket").socket;

class CreateNewGame extends React.Component {
    state = {
        inputName: "",
        gameId: "",
		getName: false
    };
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    // create unique room id and send it to server
    send = () => {
        const newRoomId = uuid();
        this.setState({
            gameId: newRoomId,
        });
        socket.emit("createNewGame", newRoomId);
    };
	// take username form <input> and set state with it
	typedUsername = () => {
		const typed = this.textInput.current.value;
		this.setState({
			inputName: typed
		})
	}
    render() {
        return (<>
			{
				// check if user have submitted name
				this.state.getName?
				<Redirect to={'/game/'+this.state.gameId}><button className='btn btn-sucess'>New Game</button></Redirect>
				:
				<div>
					<h1>Write username:</h1>
					<input
						ref={this.textInput}
						onInput={this.typedUsername}
					></input>
					<button
						className="btn btn-primary"
						// when press submit, send request to server with uuid generated as room id
						onClick={ () => {
							// this.props.didRedirect()
							this.props.setUserName(this.state.inputName)
							this.setState({
								getName: true
							})
							this.send()
						}}
					>
						Submit
					</button>
				</div>
			}
		</>);
    }
}

// export an instance of CreateNewGame, intended for later uses
const Onboard = (props) => {
	return <CreateNewGame setUserName={props.setUserName} />
}
export default Onboard;
