import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Onboard from './board/onboard';

function App() {

	const [didRedirect, setDidredirect] = React.useState(false)

	const [userName, setUserName] = React.useState('');

  return (
	<Router>
		<Switch>
			<Route exact path='/'>
				<Onboard setUserName={setUserName} />
			</Route>
			<Route exact path='/game/:gameid'>
				<></>
			</Route>
		</Switch>
	</Router>
  );
}

export default App;
