import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Nav from './Nav';
import Configuration from './Configuration';
import Feeds from './Feeds';



function App() {
    return (
        <Router>
        <div>
            <Nav/>
            <Route path="/configuration" component={Configuration} />
            <Route path="/feeds" component={Feeds} />
        </div>
        </Router>
    )
}

export default App;