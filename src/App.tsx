import React, {useEffect, useState} from 'react';
import axios from "axios";

import Header from './components/Header/Header';
import Product from "./components/Product/Product";
import { Product as ProductType} from './types';
import VitlProductContext from './context';

import './styles.scss';


const App = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [configs, setConfigs] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [basket, setBasket] = useState<ProductType[]>([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result = await axios(
                'https://vitl-static-api.s3-eu-west-1.amazonaws.com/fe-test.json',
            );
            setProducts(result.data.products);
            setConfigs(result.data.config);
        };

        fetchData().finally(() => setIsLoading(false));

    }, []);

    const handleAddProduct = (product: ProductType) => {
        const newProductList = [...basket, product]
        setBasket(newProductList);
    }

    const handleRemoveProduct = () => {
        console.log("remove")
    }

  return (
    <>
        <VitlProductContext.Provider
            value={{
                addProduct: handleAddProduct,
                removeProduct: handleRemoveProduct,
                products,
                isLoading,
                configs,
                basket,
            }}
        >

            <Header />
            <Product />
        </VitlProductContext.Provider>
    </>
  );
}

export default App;
