function solve(number){

    let numberInText = number.toString();
    let sum = 0;
    for(let i = 0; i < numberInText.length; i++){
        sum+=Number(numberInText[i])
    } 
    console.log(sum);
}
solve(245678);