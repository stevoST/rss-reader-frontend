import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.css";

import Nav from './Nav';
import Configuration from './Configuration';
import Feeds from './Feeds';
import Homepage from "./Homepage";
import ConfigurationDetail from "./ConfigurationDetail";
import Settings from "./Settings";
import Register from "./Register";
import Login from "./Login";


function App() {
    return (
        <Router>
            <div className="container mt-5">
                <Nav/>
                {/*<switch>*/}
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/settings" exact component={Settings}/>
                    <Route path="/configuration" exact component={Configuration}/>
                    <Route path="/feeds" component={Feeds}/>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/configuration/:id" component={ConfigurationDetail}/>
                {/*</switch>*/}
            </div>
        </Router>
    )
}

export default App;