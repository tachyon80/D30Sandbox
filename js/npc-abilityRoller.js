//use 4 different letters to roll ability scores from page 39
function rollAbility(letter) {
    let randNum = rollDie(1,30);
    let result;
    switch (letter) {
        case "a":
            if (randNum < 11) {
                result = 15;
            } else if (randNum < 20) {
                result = 16;
            } else if (randNum < 27) {
                result = 17;
            } else {
                result = 18;
            }
            break;
        case "b":
            if (randNum < 13) {
                result = 13;
            } else if (randNum < 25) {
                result = 14;
            } else {
                result = 15;
            }
            break;
        case "c":
            if (randNum < 8) {
                result = 9;
            } else if (randNum < 15) {
                result = 10;
            } else if (randNum < 22) {
                result = 11;
            } else if (randNum < 28) {
                result = 12;
            } else {
                result = 13;
            }
            break;
        case "d":
            if (randNum < 8) {
                result = 7;
            } else if (randNum < 15) {
                result = 8;
            } else if (randNum < 22) {
                result = 9;
            } else {
                result = 10;
            }
    }
    return result;
}