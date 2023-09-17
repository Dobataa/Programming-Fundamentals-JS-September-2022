function solve(arr){
    let elementsToPrint = arr.shift();
    let firstElements = ``;
    let lastElements = ``;

    for(let i = 0; i < elementsToPrint; i++){
        firstElements +=`${arr[i]} `;
    }

    let elementToStart = arr.length - elementsToPrint;

    for(let i = elementToStart; i < arr.length; i++){
        lastElements +=`${arr[i]} ` 
    }   

    console.log(firstElements);
    console.log(lastElements);
}
solve([2, 7, 8, 9]);