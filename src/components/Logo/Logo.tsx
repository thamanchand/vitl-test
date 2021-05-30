import React from 'react';

import logo from './vitl-logo.png';

import './styles.scss';

const Header = () => {
    // Header logic
    return (
        <div className="header">
            <img src={logo} className="brand" alt="vitl logo" />
        </div>
    )

}

export default Header;

