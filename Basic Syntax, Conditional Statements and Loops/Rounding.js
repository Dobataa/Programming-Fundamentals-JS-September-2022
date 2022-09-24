function solve(num, precision){
    if(precision > 15){
        precision = 15;
    }
    let finalNum = num.toFixed(precision);
    console.log(parseFloat(finalNum));
}
solve(10.5,3);