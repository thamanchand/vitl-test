import { createContext } from 'react';

import { Product} from './types';

export type VitlProductContextType = {
    onProductRemove: (name: string) => void;
    onProductAdd: (product: Product) => void;
    products: Product[];
    isLoading: boolean;
    configs: any;
    basket: any;
};

const VitlProductContext = createContext({} as VitlProductContextType);

export default VitlProductContext;
