function solve(input) {

    let listOfHeroes = {};
    let numberOfHeroes = input.shift();

    for (let i = 0; i < numberOfHeroes; i++) {

        let [heroName, hitPoints, manaPoints] = input.shift().split(` `);
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);
        listOfHeroes[heroName] = {
            hitPoints,
            manaPoints
        }
    }

    let currentCommand = input.shift();
    while (currentCommand !== `End`) {
        currentCommand = currentCommand.split(` - `);

        if (currentCommand[0] === `CastSpell`) {

            if (listOfHeroes[currentCommand[1]].manaPoints >= Number(currentCommand[2])) {
                let currentMana = listOfHeroes[currentCommand[1]].manaPoints - Number(currentCommand[2]);
                console.log(`${currentCommand[1]} has successfully cast ${currentCommand[3]} and now has ${currentMana} MP!`);
                listOfHeroes[currentCommand[1]].manaPoints = currentMana;

            } else {
                console.log(`${currentCommand[1]} does not have enough MP to cast ${currentCommand[3]}!`);
            }

        } else if (currentCommand[0] === `TakeDamage`) {

            if (listOfHeroes[currentCommand[1]].hitPoints > Number(currentCommand[2])) {
                let currentPoints = listOfHeroes[currentCommand[1]].hitPoints - Number(currentCommand[2]);
                console.log(`${currentCommand[1]} was hit for ${currentCommand[2]} HP by ${currentCommand[3]} and now has ${currentPoints} HP left!`);
                listOfHeroes[currentCommand[1]].hitPoints = currentPoints;

            } else {
                console.log(`${currentCommand[1]} has been killed by ${currentCommand[3]}!`);
                delete listOfHeroes[currentCommand[1]];
            }

        } else if (currentCommand[0] === `Recharge`) {

            let points = Number(currentCommand[2]);
            let rechargedMana = listOfHeroes[currentCommand[1]].manaPoints + points;
            let differenceInPoints = 0;
            if (rechargedMana > 200) {
                differenceInPoints = rechargedMana - 200;
                rechargedMana = 200;
                points -= differenceInPoints;
            }

            console.log(`${currentCommand[1]} recharged for ${points} MP!`);
            listOfHeroes[currentCommand[1]].manaPoints = rechargedMana;

        } else if (currentCommand[0] === `Heal`) {

            let points = Number(currentCommand[2]);
            let healedPoints = listOfHeroes[currentCommand[1]].hitPoints + points;
            let differenceInPoints = 0;

            if (healedPoints > 100) {
                differenceInPoints = healedPoints - 100;
                healedPoints = 100;
                points -= differenceInPoints;
            }

            console.log(`${currentCommand[1]} healed for ${points} HP!`);
            listOfHeroes[currentCommand[1]].hitPoints = healedPoints;
        }

        currentCommand = input.shift();
    }

    for (let [name, points] of Object.entries(listOfHeroes)) {
        console.log(`${name}\n HP: ${points.hitPoints}\n MP: ${points.manaPoints}`);
    }

}
solve([`4`,
    `Adela 90 150`,
    `SirMullich 70 40`,
    `Ivor 1 111`,
    `Tyris 94 61`,
    `Heal - SirMullich - 50`,
    `Recharge - Adela - 100`,
    `CastSpell - Tyris - 1000 - Fireball`,
    `TakeDamage - Tyris - 99 - Fireball`,
    `TakeDamage - Ivor - 3 - Mosquito`,
    `End`
])