function solve(input) {

    let days = Number(input.shift());
    let budget = Number(input.shift());
    let people = Number(input.shift());
    let fuelPricePerKM = Number(input.shift());
    let foodPricePerPerson = Number(input.shift());
    let roomPrice = Number(input.shift());
    let expenses = 0;

    if(people > 10){
        roomPrice = roomPrice * 0.75;
    }

    let foodAndAccommodationExpenses = (foodPricePerPerson + roomPrice) * people * days;
    expenses += foodAndAccommodationExpenses;

    for(let i = 1 ; i <= days; i++){
        let currentDay = Number(input[i - 1]);
        let fuelExpenses = currentDay * fuelPricePerKM;
        expenses += fuelExpenses;
        
        if(i % 3 === 0 || i % 5 === 0){
            fuelExpenses = expenses * 0.4;
            expenses += fuelExpenses;
        }

        if(i % 7 === 0){
            expenses -= expenses / people;
        }

        if(expenses > budget){
            console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`);
            break;
        }
    }

    if(expenses <= budget){
        console.log(`You have reached the destination. You have ${(budget - expenses).toFixed(2)}$ budget left.`);
    }
}
solve(["7",
    "12000",
    "5",
    "1.5",
    "10",
    "20",
    "512",
    "318",
    "202",
    "154",
    "222",
    "108",
    "123"]);