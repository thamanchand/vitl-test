import React from 'react';

import Cart from '../Cart/Cart';
import CartIcon from '../CartIcon/CartIcon';
import Logo from '../Logo/Logo';

import useVisible from '../../hooks/useVisible';

import './styles.scss';

const Header = () => {
    const { ref, isVisible, setIsVisible } = useVisible(false);
    const handleCartToggle = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="header" data-cy="header">
            <Logo />
            <CartIcon onClick={handleCartToggle} />
            {isVisible &&
                <div ref={ref}>
                    <Cart />
                </div>
            }
        </div>
    )

}

export default Header;

