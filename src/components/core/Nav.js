import React from 'react';

const Nav = () => {
    return (
        <header className="header">
        <div className="header-info-wrapper">
            <div className="logo">
                <img src="./assets/fire-symbol.png" alt="" className="logo-img" />
                <span className="logo-title">devcare</span>
            </div>

            <nav>
                {/* <ul className="navigation list-style-none list-inline">
                    <li><a href="https://github.com/siddhigate" className="nav-link" target="_blank"> <i
                                className="fab fa-github"></i> </a></li>
                    <li><a href="https://twitter.com/SiddhiGate" className="nav-link" target="_blank"> <i
                                className="fab fa-twitter"></i> </a></li>
                    <li><a href="https://www.linkedin.com/in/siddhigate/" className="nav-link" target="_blank"> <i
                                className="fab fa-linkedin"></i> </a></li>
                </ul> */}
            </nav>
        </div>
    </header>

    );
};

export default Nav;