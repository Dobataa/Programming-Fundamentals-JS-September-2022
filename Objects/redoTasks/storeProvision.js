function solve(current, delivery){

    let list = {};

    for(let i = 0; i < current.length; i+=2){
        list[current[i]] = Number(current[i+1]);
    }

    for(let i = 0; i < delivery.length; i+=2){
        let currentItem = delivery[i];
        let volume = Number(delivery[i+1])
        if(!list.hasOwnProperty(currentItem)){
            list[currentItem] = 0;
        }
        list[currentItem] += volume;
    }
    
    for (const key in list) {
        console.log(`${key} -> ${list[key]}`);
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);