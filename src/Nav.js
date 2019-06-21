import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Feeds from "./Feeds";
import Configuration from "./Configuration";
import Homepage from "./Homepage";


function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            {/*<a className="navbar-brand" href="#">RSS Reader</a>*/}
            <Link to="/">RSS Reader </Link>
            <ul className="navbar-nav">
                <Link to="/feeds">
                    <li className="nav-item active">Feeds
                    </li>
                </Link>
                <Link to="/configuration">
                    <li className="nav-item">Configuration
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;