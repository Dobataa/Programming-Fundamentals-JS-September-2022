function solve(city){

    for (const key in city) {
        console.log(`${key} -> ${city[key]}`);
    }

}
solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    });