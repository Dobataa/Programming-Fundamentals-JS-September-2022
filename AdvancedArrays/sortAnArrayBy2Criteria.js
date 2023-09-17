function solve(arr){

    let sortedArray = arr.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    
    sortedArray.forEach(element => {
        console.log(element);
    });
    //same as element.join(`\n`)
}
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);