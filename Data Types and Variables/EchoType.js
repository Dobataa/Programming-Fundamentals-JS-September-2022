function solve(parameter){
    console.log(typeof(parameter));
    if(typeof(parameter) != 'string' && typeof(parameter) != 'number'){
        console.log(`Parameter is not suitable for printing`)
    }else{
    console.log(parameter);
    }
}
solve(null);