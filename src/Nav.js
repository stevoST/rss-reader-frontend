import React, {Component} from 'react';


function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">RSS Reader</a>
            <ul className="navbar-nav">
                <li className="nav-item active">Feeds
                    {/*<a className="nav-item" href="#">Show All RSS</a>*/}
                </li>
                <li className="nav-item">Configuration
                    {/*<a className="nav-item" href="#">Show All RSS</a>*/}
                </li>
            </ul>
        </nav>
    )
}

export default Nav;