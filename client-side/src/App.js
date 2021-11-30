import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Onboard from './board/onboard';
import { ColorContext } from './context/colorcontext';
import JoinGame from './board/joingame';

function App() {

	const [didRedirect, setDidredirect] = React.useState(false)

	const [userName, setUserName] = React.useState('');

  return (
	<ColorContext.Provider value={ {didRedirect: didRedirect, playerDidNotRedirect: playerDidNotRedirect, playerDidRedirect: playerDidRedirect} }>
		<Router>
			<Switch>
				<Route exact path='/'>
					<Onboard setUserName={setUserName} />
				</Route>
				<Route exact path='/game/:gameid'>
					{/* {didRedirect?
						<>
							<JoinGame userName={userName} isCreator={true}/>
						</>
					:
						<JoinRoom />
					} */}
				</Route>
			</Switch>
			</Router>
	</ColorContext.Provider>
  );
}

export default App;
