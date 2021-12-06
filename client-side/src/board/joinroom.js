import React from 'react';
import JoinGame from './joingame';

class JoinRoom extends React.Component {
	state = {
		gotUserName: false,
		input: ''
	}

	constructor(props){
		super(props)
		this.textArea = React.createRef()
	}

	typingUserName = () => {
		this.setState({
			input: this.textArea.current.value
		})
	}
	
	render() { 
		return <></>;
	}
}
 
export default JoinRoom;