import React, {useContext} from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/images/icon-cart.svg';
import VitlProductContext from '../../context';

import './styles.scss';

type Props = {
    onClick: () => void;
}

const CartIcon: React.FC<Props> = ({ onClick }) => {
    const { basket } = useContext(VitlProductContext);

    return (
        <div className="cartIcon" onClick={onClick} data-cy="cartIcon">
            <ShoppingIcon className="shoppingIcon" />
            <span className="itemCount" data-cy="basketSum">{basket.length}</span>
        </div>
    )
}
export default CartIcon;
