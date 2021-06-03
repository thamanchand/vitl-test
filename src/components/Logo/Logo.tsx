import React from 'react';

import Logo from './vitl_logo.svg';

import './styles.scss';

const Header = () => {
    return (
        <div className="brand">
            <img src={Logo} className="brand" alt="vitl logo" />
        </div>
    )

}

export default Header;

