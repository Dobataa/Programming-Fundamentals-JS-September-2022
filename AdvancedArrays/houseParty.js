function solve(arr){

    let partyList = [];

    for (const el of arr) {
        let command = el.split(` `);
        let name = command[0];

        if(command.length === 3){
            if(partyList.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                partyList.push(name);
            }
        }else{
            if(!partyList.includes(name)){
                console.log(`${name} is not in the list!`);
            }else{
                partyList = partyList.filter(x => x !== name);
            }
        }
    }
    console.log(partyList.join(`\n`));
}
solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);