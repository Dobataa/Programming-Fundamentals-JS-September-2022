function orders(product, quantity) {
    let coffeePrice = 1.5;
    let waterPrice = 1;
    let cokePrice = 1.4;
    let snacksPrice = 2;
    let finalPrice = 0;

    switch (product) {
        case `coffee`:
            finalPrice = coffeePrice * quantity;
            break;
        case `water`:
            finalPrice = waterPrice * quantity;
            break;
        case `coke`:
            finalPrice = cokePrice * quantity;
            break;
        case `snacks`:
            finalPrice = snacksPrice * quantity;
            break;
    }

    console.log(finalPrice.toFixed(2));
}
orders("water", 5);