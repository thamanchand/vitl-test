import React from 'react';

import Logo from '../../assets/images/vitl_logo.svg';

import './styles.scss';

const Header = () => {
    return (
        <div className="brand">
            <img src={Logo} className="brand" alt="vitl logo" data-cy="vitlLogo"/>
        </div>
    )

}

export default Header;

