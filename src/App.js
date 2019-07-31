import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './Nav';
import Configuration from './Configuration';
import Feeds from './Feeds';
import Homepage from "./Homepage";
import ConfigurationDetail from "./ConfigurationDetail";


function App() {
    return (
        <Router>
            <div>
                <Nav/>
                {/*<switch>*/}
                    <Route path="/configuration" component={Configuration}/>
                    <Route path="/feeds" component={Feeds}/>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/configuration/:id" exact component={ConfigurationDetail}/>
                {/*</switch>*/}
            </div>
        </Router>
    )
}

export default App;