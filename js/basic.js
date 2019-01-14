//utilities for every page

//https://delim.co/# -- turn text list into array with quotes
function rollDie(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}