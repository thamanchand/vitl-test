import React from 'react';

import logo from './vitl_logo.svg';

import './styles.scss';

const Header = () => {
    return (
        <div className="brand">
            <img src={logo} className="brand" alt="vitl logo" />
        </div>
    )

}

export default Header;

