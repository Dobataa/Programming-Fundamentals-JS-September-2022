function solve(towns){

    let townsList = {};

    for (const el of towns) {
        let [town, latitude, longitude] = el.split(` | `);

        townsList.town = town;
        townsList.latitude = Number(latitude).toFixed(2);
        townsList.longitude = Number(longitude).toFixed(2);

        console.log(townsList);
    }
    
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);