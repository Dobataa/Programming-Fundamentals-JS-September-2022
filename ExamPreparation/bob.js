function solve(input) {

    let people = input.shift();
    let seats = input.shift().split(` `);
    let subtract = 4;
    let isFull = false;

    for(let i = 0 ; i < seats.length; i++){

        let currentSeat = Number(seats[i]);
        if(people < 4){
            let diff = 4 - people;
            subtract = 4 - diff; 
        }
        let difference = subtract - currentSeat;
        currentSeat += difference;
        seats[i] = currentSeat;
        people -= difference;

        if(people === 0 && currentSeat === 4){
            console.log(seats.join(` `));
            isFull = true;
            break;
        }

        if(people <= 0){
            console.log(`The lift has empty spots!`);
            console.log(seats.join(` `));
            break;
        }
    }

    if(people > 0 && !isFull){
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(seats.join(` `));
    }

}
solve([
    "16",
    "0 0 0 0 "])

