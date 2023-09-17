function solve(input){

    let length = Number(input.shift());
    let list = {};

    for(let i = 0 ; i < length; i++){
        let [name, rarity] = input.shift().split(`<->`);
        rarity = Number(rarity);
        list[name] = {
            rarity:rarity
        }
    }

    let currentCommand = input.shift();

    while(currentCommand !== `Exhibition`){

        currentCommand = currentCommand.split(`: `);
        

        if(currentCommand[0] === `Rate`){
            currentCommand = currentCommand[1].split(` - `);
            
            list[currentCommand[0].rarity] += currentCommand[1];
            
            console.table(list);
        }

        currentCommand = input.shift();
    }
}
solve((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]));