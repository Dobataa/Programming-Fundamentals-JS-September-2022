function solve(input){

    let storage = {};

    for (const line of input) {
        let [product, quantity] = line.split(` `);
        quantity = Number(quantity);
        if(!storage.hasOwnProperty(product)){
            storage[product] = 0;
        }
        storage[product] += quantity;
    }

    for (const key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);