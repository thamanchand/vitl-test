export const productTotal = (basket: any) => {
     return basket.reduce((accumulator: number, currentValue: any) => {
        return accumulator + currentValue.price;
    },0);
}