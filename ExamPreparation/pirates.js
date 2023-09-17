function solve(input) {

    let cities = {};
    let currentCommand = input.shift();

    while (currentCommand !== `Sail`) {
        let [name, population, gold] = currentCommand.split(`||`);
        if (!cities.hasOwnProperty(name)) {
            cities[name] = {
                population,
                gold
            }
            cities[name].population = Number(cities[name].population);
            cities[name].gold = Number(cities[name].gold);
        } else {
            cities[name].population += Number(population);
            cities[name].gold += Number(gold);
        }
        currentCommand = input.shift();
    }

    while(currentCommand !== `End`){

        command = currentCommand.split(`=>`);

        switch(command[0]){
            case `Plunder`:
                console.log(`${command[1]} plundered! ${command[3]} gold stolen, ${command[2]} citizens killed.`);
                
                cities[command[1]].gold -= Number(command[3]);
                cities[command[1]].population -= Number(command[2]);

                if(cities[command[1]].gold <= 0 || cities[command[1]].population <= 0){
                    console.log(`${command[1]} has been wiped off the map!`);
                    delete cities[command[1]];
                }

                break;
            case `Prosper`:
                if(Number(command[2]) < 0){
                    console.log(`Gold added cannot be a negative number!`);
                    break;
                }
                cities[command[1]].gold += Number(command[2]);
                console.log(`${command[2]} gold added to the city treasury. ${command[1]} now has ${cities[command[1]].gold} gold.`);
                break;
        }

        currentCommand = input.shift();
    }
    
    if(Object.keys(cities).length !== 0){
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);

        for (let [name, provisions] of Object.entries(cities)) {
            console.log(`${name} -> Population: ${provisions.population} citizens, Gold: ${provisions.gold} kg`);
        }
    }else{
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
solve(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);
