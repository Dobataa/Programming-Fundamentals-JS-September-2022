function perfectNumber(number){

    let sumOfDivisors = 0;
    let isPerfect = false;

    for(let i = 1; i <= number; i++){

        if(number % i === 0){
            sumOfDivisors += i;
        }

        if(sumOfDivisors / 2 === number){
            console.log(`We have a perfect number!`);
            isPerfect = true;
            break;
        }
    }
    if(!isPerfect){
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(1236498);