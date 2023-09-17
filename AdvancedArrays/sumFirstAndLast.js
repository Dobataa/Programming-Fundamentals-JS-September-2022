function solve(arr){
    let firstNumber = Number(arr.shift());
    let lastNumber = Number(arr.pop());
    let sum = firstNumber + lastNumber;
    console.log(sum);
}
solve(['20', '30', '40']);