import React from "react";
// import logo from './logo.svg';
// import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Onboard from "./board/onboard";
import { ColorContext } from "./context/colorcontext";
import JoinRoom from "./board/joinroom";
import JoinGame from "./board/joingame";
import ChessGame from ".ui/chessgame";

function App() {
    const [didRedirect, setDidredirect] = React.useState(false);

    const playerDidRedirect = React.useCallback(() => {
        setDidredirect(true);
    }, []);

    const playerDidNotRedirect = React.useCallback(() => {
        setDidredirect(false);
    }, []);

    const [userName, setUserName] = React.useState("");

    return (
        <ColorContext.Provider
            value={{
                didRedirect: didRedirect,
                playerDidNotRedirect: playerDidNotRedirect,
                playerDidRedirect: playerDidRedirect,
            }}
        >
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Onboard setUserName={setUserName} />
                    </Route>
                    <Route exact path="/game/:gameid">
                        {didRedirect ? (
                            <>
                                <JoinGame
                                    userName={userName}
                                    isCreator={true}
                                />
                                <ChessGame myUserName={userName} />
                            </>
                        ) : (
                            <JoinRoom />
                        )}
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </ColorContext.Provider>
    );
}

export default App;
