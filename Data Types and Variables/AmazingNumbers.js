function solve(num){
    let numText = num.toString();
    let sum = 0;
    for(let i = 0; i < numText.length; i++){
        sum += Number(numText[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${numText} Amazing? True` : `${numText} Amazing? False` );
}
solve(1233);