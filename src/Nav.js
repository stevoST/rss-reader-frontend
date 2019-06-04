import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Feeds from "./Feeds";
import Configuration from "./Configuration";
import Homepage from "./Homepage";


function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            {/*<a className="navbar-brand" href="#">RSS Reader</a>*/}
            <Link to={Homepage}>RSS Reader </Link>
            <ul className="navbar-nav">
                <Link to={Feeds}>
                    <li className="nav-item active">Feeds
                        {/*<a className="nav-item" href="#">Show All RSS</a>*/}
                    </li>
                </Link>
                <Link to={Configuration}>
                    <li className="nav-item">Configuration
                        {/*<a className="nav-item" href="#">Show All RSS</a>*/}
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;