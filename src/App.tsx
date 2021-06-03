import React, {useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import Footer from './components/Footer';
import Header from './components/Header/Header';
import Product from "./components/Product/Product";
import { Product as ProductType} from './types';
import VitlProductContext from './context';

import './assets/styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success("New product added to cart")
    }

    const handleRemoveProduct = (productName: string) => {
        const filterProduct = basket.filter(({ name}) => name !== productName);
        setBasket(filterProduct);
        toast.error("Product is removed from cart")
    }

  return (
    <>
        <ToastContainer />
        <VitlProductContext.Provider
            value={{
                onProductAdd: handleAddProduct,
                onProductRemove: handleRemoveProduct,
                products,
                isLoading,
                configs,
                basket,
            }}
        >
            <Header />
            <Product />
        </VitlProductContext.Provider>
        <Footer />
    </>
  );
}

export default App;
