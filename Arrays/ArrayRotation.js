function solve(input, rotations){
    let turns = rotations % input.length;
    for(let i = 0; i < turns; i++){
        let numberToRotate = input.shift();
        input.push(numberToRotate);
    }

    console.log(input.join(` `));
}
solve([51, 47, 32, 61, 21], 2);