import React from 'react';
import {Link} from 'react-router-dom'



function Nav() {
    return (
        <nav className="navbar">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">RSS Reader </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  to="/feeds">Feeds</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/configuration">Configuration</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;