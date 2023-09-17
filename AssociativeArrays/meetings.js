function solve(input) {

    let schedule = {};

    for (const line of input) {
        let [weekDay, name] = line.split(` `);
        if (!schedule.hasOwnProperty(weekDay)) {
            schedule[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        } else {
            console.log(`Conflict on ${weekDay}!`);
        }
    }

    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);