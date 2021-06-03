import React, {memo, useContext} from "react";

import Button from "../Button/Button";
import VitlProductContext from "../../context";
import Divider from '../Divider/Divider';

import { Vitamins } from '../../constants';

import { Product} from "../../types";

import "./styles.scss";

type Props = {
    item: Product;
    handleAddProduct: (item: Product) => void;
    uuid: number;
};

const ProductItem = ({ item, handleAddProduct, uuid }: Props) => {
    const { name, price} = item;
    const { basket } = useContext(VitlProductContext);

    const isProductExist = basket.filter((item: Product) => item.name === name).length > 0;

    return (
        <li className="cardsItem">
            <div className="card">
                <div>
                    <img src={Vitamins[uuid]} className="cardImage" alt="product_image" />
                </div>
                <div className="cardContent">
                    <h2 className="productName">{name}</h2>
                    <Divider isSmall />
                    <p className="productPrice">£{price}</p>
                    <div className="productFooter">
                        <Button
                            onClick={() => handleAddProduct(item)}
                            disabled={isProductExist}
                        >
                            {isProductExist
                                ? <span>Added to cart </span>
                                : <span>Add to cart</span>
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    );
};

// Stop re-rendering if same product is added.
export default memo(ProductItem);
