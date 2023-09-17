function solve(number){

    let daysOfWeek = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

    if(number >= 1 && number <= 7){
        console.log(daysOfWeek[number-1]);
    }else{
        console.log(`Invalid day!`);
    }
}
solve(8);