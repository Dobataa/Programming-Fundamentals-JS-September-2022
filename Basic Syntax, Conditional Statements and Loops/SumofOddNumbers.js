function solve(num){
    let sum = 0;
    let cnt = 1;
    for(let i = 1;cnt <= num; i++){
        console.log(i);
        sum += i;
        i++;
        cnt++;
    }
    console.log(`Sum: ${sum}`);
}
solve(3);