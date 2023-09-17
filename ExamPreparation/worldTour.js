function solve(input) {

    let destinations = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== `Travel`) {

        currentCommand = currentCommand.split(`:`);

        if (currentCommand.includes(`Add Stop`)) {

            let index = currentCommand[1];
            let city = currentCommand[2];

            let sliced = destinations.slice(0, index);
            let remaining = destinations.slice(index);

            sliced += city;
            destinations = sliced + remaining;
            console.log(destinations);

        } else if (currentCommand.includes(`Remove Stop`)) {

            let startIndex = Number(currentCommand[1]);
            let endIndex = Number(currentCommand[2]);
            let length = destinations.length;

            if (startIndex < 0 || startIndex > length) {
                break;
            }

            if (startIndex < 0 || startIndex > length) {
                break;
            }

            let sliced = destinations.slice(0, startIndex);
            let remaining = destinations.slice(endIndex + 1);

            destinations = sliced + remaining;
            console.log(destinations);
        } else if (currentCommand.includes(`Switch`)) {

            let currentDestination = currentCommand[1];
            let newDestination = currentCommand[2];

            while (destinations.includes(currentDestination)) {
                destinations = destinations.replace(currentDestination, newDestination);
            }

            console.log(destinations);
        }

        currentCommand = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);

}
solve((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]));