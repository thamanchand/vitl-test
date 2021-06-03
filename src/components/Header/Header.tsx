import React, { useState } from 'react';

import Cart from '../Cart/Cart';
import CartIcon from '../CartIcon/CartIcon';
import Logo from '../Logo/Logo';

import './styles.scss';

const Header = () => {
    const [toggleCart, setToggleCart] = useState(false);

    const handleCartToggle = () => {
        setToggleCart(!toggleCart);
    }

    return (
        <div className="header">
            <Logo />
            <CartIcon onClick={handleCartToggle} />
            {toggleCart && <Cart />}
        </div>
    )

}

export default Header;

