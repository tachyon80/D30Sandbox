//pilgrims generator page 23
let fightArray = [[1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5],[3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,8,8],[6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10]];
let thiefArray = [[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6],[3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2],[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]];
let monkRslt = document.getElementById("monkRslt");
let muRslt = document.getElementById("muRslt");
$("#pilRoll").click(function () {
    let roll1 = rollDie(1,30);
    let cntRoll = rollDie(1,10);
    let mountRoll = rollDie(1,3);
    let ftRoll = rollDie(0,29);
    let alignment;
    let monk = false;
    let magUser = false;
    let assassin = false;
    let paladin = false;
    let ranger = false;
    let berserk = false;
    let druid = false;
    if (roll1 < 3) {
        alignment = "lawful neutral";
    } else if (roll1 < 11) {
        alignment = "lawful good";
        paladin = true;
    } else if (roll1 < 17) {
        alignment = "chaotic good";
        ranger = true;
    } else if (roll1 < 20) {
        alignment = "neutral";
        druid = true;
    } else if (roll1 < 21) {
        alignment = "neutral evil";
        druid = true;
    } else if (roll1 < 27) {
        alignment = "lawful evil";
        berserk = true;
    } else if (roll1 < 30) {
        alignment = "chaotic evil";
        assassin = true;
    } else {
        alignment = "chaotic neutral";
    }
    switch (roll1) {
        case 1:
        case 5:
        case 11:
        case 17:
        case 23:
        case 27:
            magUser = true;
            break;
        case 3:
        case 21:
            magUser = true;
            monk = true;
            break;
        case 4:
        case 20:
        case 22:
            monk = true;
    }
    document.getElementById("alignRslt").innerHTML = alignment;
    if (monk) {
        monkRslt.innerHTML = "yes";
    } else {
        monkRslt.innerHTML = "no";
    }
    if (magUser) {
        muRslt.innerHTML = "yes";
    } else {
        muRslt.innerHTML = "no";
    }
});