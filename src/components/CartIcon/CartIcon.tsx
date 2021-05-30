import React from 'react';

import './styles.scss';

type Props = {
    onClick: () => void;
}
const CartIcon: React.FC<Props> = ({ onClick }) => {
    return (
        <div className="cartIcon" onClick={onClick}>
            <div className="shoppingIcon" />
            <span className="item-count">1</span>
        </div>
    )
}
export default CartIcon;
