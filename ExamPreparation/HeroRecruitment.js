function solve(input) {
    let list = {};
    let currentCommand = input.shift();

    while (currentCommand !== `End`) {
        command = currentCommand.split(` `);

        switch (command[0]) {
            case `Enroll`:
                if (list.hasOwnProperty(command[1])) {
                    console.log(`${command[1]} is already enrolled.`);
                } else {
                    let spell = [];
                    list[command[1]] = {
                        spell
                    }
                }
                break;
            case `Learn`:
                if (!list.hasOwnProperty(command[1])) {
                    console.log(`${command[1]} doesn't exist.`);
                } else if (list[command[1]].spell.includes(command[2])) {
                    console.log(`${command[1]} has already learnt ${command[2]}.`);
                } else {
                    list[command[1]].spell.push(command[2]);
                }
                break;
            case `Unlearn`:
                if (!list.hasOwnProperty(command[1])) {
                    console.log(`${command[1]} doesn't exist.`);
                } else if (!list[command[1]].spell.includes(command[2])) {
                    console.log(`${command[1]} doesn't know ${command[2]}.`);
                } else {
                    let index = list[command[1]].spell.indexOf(command[2]);
                    let sliced = list[command[1]].spell.slice(0,index)
                    let remaning = list[command[1]].spell.slice(index+1);
                    list[command[1]].spell = sliced.concat(remaning);
                }
                break;
        }
        currentCommand = input.shift();
    }
    console.log(`Heroes:`);
    
    let spells = ``;
    let length = list[command[1]].spell.length;
    for (let i = 0; i < length; i++) {
        if(i === 0){
            spells += `${list[command[1]].spell[i]} `;
        }else{
            spells += `,${list[command[1]].spell[i]} `;
        }
    }

    for (let [name, spell] of Object.entries(list)) {
        console.log(`== ${name}: ${spells}`);
    }
}
solve(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"]);
