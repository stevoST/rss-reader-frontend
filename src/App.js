import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Nav';
import Configuration from './Configuration';
import Feeds from './Feeds';
import Homepage from "./Homepage";


function App() {
    return (
        <Router>
            <div>
                <Nav/>
                {/*<switch>*/}
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/configuration" component={Configuration}/>
                    <Route path="/feeds" component={Feeds}/>
                {/*</switch>*/}
            </div>
        </Router>
    )
}

export default App;