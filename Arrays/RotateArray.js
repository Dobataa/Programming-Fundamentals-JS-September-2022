function solve(input){
    let arrLength = input.length;
    let rotations = Number(input[arrLength - 1]);
    input.pop();
    
    for(let i = 0; i < rotations; i++){
        let tempElement = input.pop();
        input.unshift(tempElement);
    }
    console.log(input.join(` `));
}
solve(['1', '2', '3', '4', '2']);