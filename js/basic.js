//utilities for every page

//https://delim.co/# -- turn text list into array with quotes
function rollDie(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function setSize(size) {
    let population = 0;
    switch (size) {
        case 1: //thorp
            population = 5 + rollDie(1,30);
            break;
        case 2: //hamlet
            population = 30 + rollDie(1,30);
            break;
        case 3: //village
            population = (5 + rollDie(1,30))*5;
            break;
        case 4: //small town
            population = (2 + rollDie(1,30))*60;
            break;
        case 5: //large town
            population = (20 + rollDie(1,30))*100;
            break;
        case 6: //small city
            population = 5000 + (rollDie(1,30)*200);
            break;
        case 7: //large city
            population = 10000 + (rollDie(1,30)*400);
    }
    return population;
}