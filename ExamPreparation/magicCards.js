function solve(input) {

    let cards = input.shift().split(":");
    let command = input.shift();
    let newDeck = [];

    while (command !== "Ready") {
        let [action, first, second] = command.split(" ");

        switch (action) {
            case `Add`:
                if (cards.includes(first)) {
                    newDeck.push(first);
                } else {
                    console.log(`Card not found.`);
                }
                break;
            case `Insert`:
                if (cards.includes(first) && newDeck[second]) {
                    newDeck.splice(second, 0, first);
                } else {
                    console.log(`Error!`);
                }
                break;
            case `Remove`:
                if (newDeck.includes(first)) {
                    let index = newDeck.indexOf(first);
                    newDeck.splice(index, 1);
                } else {
                    console.log(`Card not found.`);
                }
                break;
            case `Swap`:
                let firstCard = newDeck.indexOf(first);
                let secondCard = newDeck.indexOf(second);
                newDeck.splice(firstCard, 1, second);
                newDeck.splice(secondCard, 1, first);
                break;
            case `Shuffle`:
                newDeck.reverse();
                break;
        }

        command = input.shift();

    }

    console.log(newDeck.join(" "));
}
solve(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
    "Add Moonfire",
    "Add Bite",
    "Insert Claw 0",
    "Swap Claw Moonfire",
    "Remove Bite",
    "Ready"]);