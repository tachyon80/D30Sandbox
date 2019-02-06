//city guards, city watch, border patrols page 32
let classy = document.getElementById("classy");
let theMen = document.getElementById("men");
let notes = document.getElementById("notes");
let fitGrp1 = [1,2,3];
let fitGrp2 = [[1,2],[1,3],[2,3]];
function arms() {
    let wpn1Array = ["short sword","long sword","broad sword","flail","mace"];
    let wpn2Array = ["halberd","short bow","spear","long bow","light crossbow"];
    let txt = "Weapons: " + wpn1Array[rollDie(0,4)];
    let roller = rollDie(0,5);
    if (roller < 5) {
        txt += " and " + wpn2Array[roller];
    }
    return txt;
}
function standard() {
    let noteTxt = "All fighters and mercenaries wear chain armor. ";
    if (rollDie(1,2) < 2) {
        noteTxt += "They have shields. ";
    }
    noteTxt += arms();
    notes.innerHTML = noteTxt;
}
function borderNote() {
    let noteTxt = "All fighters have plate armor, shield, longsword, flail and lance. Men-at-arms wear ";
    let armor = "chain";
    if (rollDie(1,2) < 2) {
        armor = "leather";
    }
    noteTxt += armor + " armor";
    if (rollDie(1,2) < 2) {
        noteTxt += " and have shields";
    }
    noteTxt += ".";
    if (rollDie(1,3) < 2) {
        noteTxt += " They have light horses and are armed as the fighters."
    } else {
        noteTxt += " " + arms();
    }
    notes.innerHTML = noteTxt;
}
function cityGuard() {
    let mage = rollDie(1,5);
    let mageSwag = itemGen("muser",mage);
    let classList = "magic-user level " + mage + " (advisor) &mdash; " + mageSwag[0] + " &mdash; magic items: " + mageSwag[1] + "<br><br>";
    let fitr1 = [];
    let fitSwag;
    if (rollDie(1,2) < 2) {
        fitr1[0] = fitGrp1[rollDie(0,2)];
    } else {
        fitr1 = fitGrp2[rollDie(0,2)];
    }
    for (let i=0;i<fitr1.length;i++) {
        classList += "fighter level " + fitr1[i];
        if (fitr1[i] > 2) {
            fitSwag = itemGen("fighter",3);
            classList += " &mdash; magic items: " + fitSwag[1];
        }
        classList += "<br><br>";
    }
    //2nd roll
    let fitRoll = rollDie(1,30);
    let fitLvl;
    let mercCnt = parseInt(fitRoll.toString().slice(-1)) + 6;
    if (fitRoll > 15) {
        fitLvl = 5;
    } else if (fitRoll > 6) {
        fitLvl = 4;
    }
    if (fitLvl) {
        classList += "fighter level " + fitLvl + " &mdash; " + itemGen("fighter",3)[1];
    }
    classy.innerHTML = classList;
    mercCnt = (mercCnt === 6) ? 16:mercCnt;
    theMen.innerHTML = mercCnt;
    standard();
}
function dayWatch() {
    let roll = rollDie(1,10);
    let clerRoll = rollDie(1,3);
    let clericLvl = 4;
    let fitLvl = 1;
    let mercCnt = 3;
    let classList = "cleric level ";
    //determine cleric
    if (clerRoll < 2) {
        clericLvl = 3;
    } else if (clerRoll > 2) {
        clericLvl = 5;
    }
    let clerSwag = itemGen("cleric",clericLvl);
    classList += clericLvl + " &mdash; " + clerSwag[0] + " &mdash; magic items: " + clerSwag[1] + "<br><br>";
    //determine fighter
    switch (roll) {
        case 3:
        case 5:
            fitLvl = 2;
            break;
        case 6:
        case 8:
            fitLvl = 3;
            break;
        case 7:
        case 9:
        case 10:
            fitLvl = 4;
    }
    classList += "fighter level " + fitLvl;
    if (fitLvl > 2) {
        classList += " &mdash; " + itemGen("fighter",fitLvl)[1];
    }
    classy.innerHTML = classList;
    //determine men-at-arms
    if (roll > 9) {
        mercCnt = 7;
    } else if (roll > 7) {
        mercCnt = 6;
    } else if (roll > 3) {
        mercCnt = 5;
    } else if (roll > 1) {
        mercCnt = 4;
    }
    theMen.innerHTML = mercCnt;
    standard();
}
function nightWatch() {
    let roll = rollDie(1,10);
    let clerRoll = rollDie(1,3);
    let clericLvl = 5;
    let classList = "cleric level ";
    let fitLvl = 3;
    let mercCnt = 8;
    //determine cleric
    if (clerRoll < 2) {
        clericLvl = 4;
    } else if (clerRoll > 2) {
        clericLvl = 6;
    }
    let clerSwag = itemGen("cleric",clericLvl);
    classList += clericLvl + " &mdash; " + clerSwag[0] + " &mdash; magic items: " + clerSwag[1] + "<br><br>";
    //determine fighter
    switch (roll) {
        case 3:
        case 5:
            fitLvl = 4;
            break;
        case 6:
        case 8:
            fitLvl = 5;
            break;
        case 7:
        case 9:
        case 10:
            fitLvl = 6;
    }
    classList += "fighter level " + fitLvl + " &mdash; " + itemGen("fighter",fitLvl)[1];
    classy.innerHTML = classList;
    //determine men-at-arms
    if (roll > 9) {
        mercCnt = 12;
    } else if (roll > 7) {
        mercCnt = 11;
    } else if (roll > 3) {
        mercCnt = 10;
    } else if (roll > 1) {
        mercCnt = 9;
    }
    theMen.innerHTML = mercCnt;
    standard();
}
function patrol() {
    let roll = rollDie(1,30);
    let classList = "";
    let fitClass = "fighter";
    let fitLvl2 = 2;
    let fitLvl3 = 5;
    let fitLvl4 = 6;
    if (rollDie(1,3) < 2) {
        fitClass = "ranger";
    }
    if (rollDie(1,2) < 2) {
        classList += "3 ";
    } else {
        classList += "4 ";
    }
    classList += "level 1 fighters" + "<br><br>";
    if (roll > 28) {
        fitLvl2 = 5;
    } else if (roll > 22) {
        fitLvl2 = 4;
    } else if (roll > 12) {
        fitLvl2 = 3;
    }
    classList += fitClass + " level " + fitLvl2;
    if (fitLvl2 > 2) {
        classList += " &mdash; " + itemGen("fighter",fitLvl2)[1];
    }
    classList += "<br><br>";
    switch (roll) {
        case 1:
        case 2:
            fitLvl3 = 3;
            break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 13:
        case 14:
        case 15:
        case 16:
            fitLvl3 = 4;
            break;
        case 10:
        case 11:
        case 20:
        case 21:
        case 26:
        case 27:
        case 29:
        case 30:
            fitLvl3 = 6;
            break;
        case 12:
        case 22:
        case 28:
            fitLvl3 = 7;
    }
    classList += fitClass + " level " + fitLvl3 + " &mdash; " + itemGen("fighter",fitLvl3)[1] + "<br><br>";
    switch (roll) {
        case 2:
        case 6:
        case 9:
        case 11:
        case 12:
        case 16:
        case 19:
        case 21:
        case 22:
        case 25:
        case 27:
        case 28:
        case 30:
            fitLvl4 = 8;
            break;
        case 3:
        case 13:
            fitLvl4 = 5;
    }
    classList += fitClass + " level " + fitLvl4 + " &mdash; " + itemGen("fighter",fitLvl4)[1] + "<br><br>";
    classy.innerHTML = classList;
    theMen.innerHTML = rollDie(1,15) + 9;
    borderNote();
}
$("#guardRoll").click(function () {
    let variety = $("input[name=pickType]:checked").val();
    switch (variety) {
        case "guard":
            cityGuard();
            break;
        case "day":
            dayWatch();
            break;
        case "night":
            nightWatch();
            break;
        case "patrol":
            patrol();
    }
});