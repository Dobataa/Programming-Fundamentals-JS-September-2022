function solve(destination){

    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;
    let count = 0;
    let ourCity = [];

    if (pattern.test(destination)) {
        const ourDest = destination.match(pattern);

        ourDest.forEach(destination => {
            count += (destination.length - 2);
            ourCity.push(destination.slice(1, (destination.length - 1)));

        });
    }
    
        console.log(`Destinations: ${ourCity.join(", ")}`);
        console.log(`Travel Points: ${count}`);
    
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");