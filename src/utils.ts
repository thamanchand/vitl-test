import {Configs, Nutrient, Product} from './types';

export const productTotal = (basket: any) => {
     return basket.reduce((accumulator: number, currentValue: any) => {
        return accumulator + currentValue.price;
    },0);
}
export const getNutrientTUL = (tolerableUpperLimits: Configs[], id: string) => {
    return tolerableUpperLimits.find((config: any) => config.id === id);
}

export const findNutrientFromBasket = (nutrients: Nutrient[], id: string) => {
    return nutrients.find((item: any) => item.id === id);
}

export const isProductFoundInBasket = (basket: Product[], name: string) => {
    return basket.filter((item: any) => item.name === name).length < 1;
}