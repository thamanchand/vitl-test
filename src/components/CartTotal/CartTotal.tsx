import React from 'react';

import Divider from "../Divider/Divider";

import {totalPrice} from "../../utils";

const Total = ({ basket }: any) => {
    return (
        <>
            <Divider isSmall={false} />
            <div className="totalSum">
                <span className="totalLabel">Total</span>
                <span className="totalPrice">£{totalPrice(basket)}</span>
            </div>
        </>
    )
};

export default Total;
