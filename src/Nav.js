import React from 'react';
import {Link} from 'react-router-dom'


function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/">RSS Reader</Link>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/feeds">Feeds</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/configuration">Configuration</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings">Settings</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;