function solve(towns) {

    towns.forEach(line => {
        let [town, latitude, longitude] = line.split(` | `);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let currentTown = {
            town,
            latitude,
            longitude,
        }

        console.log(currentTown);
    });
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);