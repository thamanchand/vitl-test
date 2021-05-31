import React, { useContext } from 'react';

import ProductItem from "../ProductItem/ProductItem";
import VitlProductContext from '../../context';
import { Product as ProductType } from '../../types';

import './styles.scss';

const Product = () => {
    const { products, isLoading, addProduct } = useContext(VitlProductContext);
    const onAddProduct = (product: ProductType) => {
        // const addedProductNutrientId = product.nutrients[0].id;
        // const selectedProductTUL = configs.tolerableUpperLimits.find((config: any) => config.id === addedProductNutrientId);
        addProduct(product);
    }

    if(isLoading) return <span>Loading...</span>
    return (
        <ul className="cards">
            {products.length
                ? (
                    products.map((cartItem: ProductType, index) => (
                        <ProductItem key={index} item={cartItem} handleAddProduct={onAddProduct}/>
                        ))
                ) : (
                        <span className="emptyMessage">No products</span>
                )
            }

        </ul>
    )

}

export default Product;

