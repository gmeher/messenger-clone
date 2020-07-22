import React from 'react';
import './App.css';
import ChatWindow from './components/chat-window/chat-window.component';
import ChatPage from './pages/chat-page.page';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>


            < div className='app-container' >

                <Switch>
                    <Route exact path='/:id' component={ChatWindow} />
                    <Route exact path='/' component={ChatPage} />
                </Switch>
            </div>
        </Router>


    )
}

export default App;