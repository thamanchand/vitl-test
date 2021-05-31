import React from 'react';
import { ReactComponent as ShoppingIcon } from './icon-cart.svg';

import './styles.scss';

type Props = {
    onClick: () => void;
}

const CartIcon: React.FC<Props> = ({ onClick }) => {
    return (
        <div className="cartIcon" onClick={onClick}>
            <ShoppingIcon className="shoppingIcon" />
            <span className="itemCount">1</span>
        </div>
    )
}
export default CartIcon;
