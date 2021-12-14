import React from 'react';
import {useParams} from 'react-router-dom'

const socket = require('../connection/socket').socket

const JoinRoom = (id, username, creator) => {
	const idData = {
		gameId: id,
		userName: username,
		isCreator: creator
	}
	socket.emit("playerJoinGame", idData)
}

const JoinGame = (props) => {
	const {id} = useParams()
	JoinRoom(id, props.username, props.creator)
	return <>
			<h1>Chess initialezed sucessfully</h1>
		</>
}

export default JoinGame