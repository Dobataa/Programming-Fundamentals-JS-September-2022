function solve(number){
    let firstLetter;
    let secondLetter;
    let thirdLetter;
    for(let i = 0; i <= number - 1; i++){
        firstLetter = String.fromCharCode(97+i);
        for(let j = 0; j <= number - 1; j++){
            secondLetter = String.fromCharCode(97+j);
            for(let k = 0; k <= number - 1; k++){
                thirdLetter = String.fromCharCode(97+k);
                let finalNumber = firstLetter + secondLetter + thirdLetter;
                console.log(finalNumber);
            }
        }
    }
}
solve(3);