function solve(length, elements){
    let result = [1];

    for(let i = 1; i < length; i++){
        let index = Math.max(result.length - elements, 0);
        let lastElement = result.slice(index);
        let sum = 0;

        for (const el of lastElement) {
            sum += el;   
        }

        result.push(sum);
    }
    console.log(result.join(` `));
}
solve(6, 3);