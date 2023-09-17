function solve(currentProducts, orderedProducts){

    let availableLength = currentProducts.length;
    let deliveryLength = orderedProducts.length; 
    let productsList = {};

    for(let i = 0; i < availableLength; i+=2){
        productsList[currentProducts[i]] = Number(currentProducts[i+1]);
    }

    for(let i = 0; i < deliveryLength; i+=2){
        let currentProduct = orderedProducts[i];

        if(!productsList.hasOwnProperty(currentProduct)){
            productsList[currentProduct] = 0;
        }
        productsList[currentProduct] += Number(orderedProducts[i+1]);
    }
    
    for (const key in productsList) {
        console.log(`${key} -> ${productsList[key]}`);
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);