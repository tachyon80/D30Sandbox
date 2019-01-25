// castle/keep/stronghold generator pages 26 & 27
fightSpread = [[0,3],[3,6],[6,9],[10,13],[14,17],[18,21],[22,25],[26,29]];
clericSpread = [[0,2],[3,5],[6,8],[9,11],[12,14],[15,17],[18,20],[21,23],[24,26],[27,29]];
magicSpread = [[0,4],[5,9],[10,14],[15,19],[20,24],[25,29]];
fightPtrl = ["2 heavy horsemen","3 heavy horsemen","3 heavy horsemen","4 heavy horsemen and level 1 fighter","4 heavy horsemen","5 heavy horsemen","5 heavy horsemen and level 1 fighter","5 heavy horsemen and level 2 fighter","6 heavy horsemen","6 heavy horsemen and level 1 fighter","6 heavy horsemen and level 2 fighter","6 heavy horsemen and level 3 fighter","7 heavy horsemen and level 1 fighter","7 heavy horsemen and level 2 fighter","7 heavy horsemen and level 3 fighter","7 heavy horsemen and level 4 fighter","7 heavy horsemen and level 5 fighter","7 heavy horsemen and level 6 fighter","8 heavy horsemen and level 3 fighter","8 heavy horsemen and level 4 fighter","8 heavy horsemen and level 5 fighter","8 heavy horsemen and level 6 fighter","9 heavy horsemen and level 4 fighter","9 heavy horsemen and level 5 fighter","9 heavy horsemen and level 6 fighter","10 heavy horsemen and level 5 fighter","10 heavy horsemen and level 6 fighter","11 heavy horsemen and level 5 fighter","11 heavy horsemen and level 6 fighter","12 heavy horsemen and level 6 fighter"];
magicPtrl = ["2 heavy footmen","3 heavy footmen","3 heavy footmen","4 heavy footmen and level 1 fighter","4 heavy footmen","5 heavy footmen","5 heavy footmen and level 1 fighter","5 heavy footmen and level 2 fighter","6 heavy footmen","6 heavy footmen and level 1 fighter","6 heavy footmen and level 2 fighter","6 heavy footmen and level 3 fighter and level 1 magic user","7 heavy footmen and level 1 fighter","7 heavy footmen and level 2 fighter","7 heavy footmen and level 3 fighter and level 1 magic user","7 heavy footmen and level 4 fighter and level 1 magic user","7 heavy footmen and level 5 fighter and level 1 magic user","7 heavy footmen and level 6 fighter and level 2 magic user","8 heavy footmen and level 1 fighter and level 1 magic user","8 heavy footmen and level 2 fighter and level 1 magic user","8 heavy footmen and level 3 fighter and level 2 magic user","8 heavy footmen and level 4 fighter and level 3 magic user","9 heavy footmen and level 3 fighter and level 1 magic user","9 heavy footmen and level 4 fighter and level 2 magic user","9 heavy footmen and level 5 fighter and level 3 magic user","10 heavy footmen and level 4 fighter and level 4 magic user","10 heavy footmen and level 5 fighter and level 5 magic user","11 heavy footmen and level 5 fighter and level 4 magic user","11 heavy footmen and level 6 fighter and level 5 magic user","12 heavy footmen and level 6 fighter and level 5 magic user"];
clericPtrl = ["2 medium horsemen","3 medium horsemen","3 medium horsemen and level 1 cleric","4 medium horsemen","4 medium horsemen and level 2 cleric","5 medium horsemen","5 medium horsemen","5 medium horsemen and level 3 cleric","6 medium horsemen","6 medium horsemen and level 3 cleric","6 medium horsemen and level 4 cleric","6 medium horsemen and level 5 cleric","7 medium horsemen","7 medium horsemen and level 3 cleric","7 medium horsemen and level 4 cleric","7 medium horsemen and level 1 cleric and level 4 cleric","7 medium horsemen and level 2 cleric and level 4 cleric","7 medium horsemen and level 3 cleric and level 4 cleric","8 medium horsemen and level 4 cleric","8 medium horsemen and level 2 cleric and level 4 cleric","8 medium horsemen and level 3 cleric and level 4 cleric","8 medium horsemen and level 4 cleric and level 5 cleric","9 medium horsemen and level 4 cleric","9 medium horsemen and level 5 cleric","9 medium horsemen and level 2 cleric and level 4 cleric","10 medium horsemen and level 3 cleric and level 4 cleric","10 medium horsemen and level 3 cleric and level 5 cleric","11 medium horsemen and level 3 cleric and level 5 cleric","11 medium horsemen and level 4 cleric and level 5 cleric","12 medium horsemen and level 2 cleric and level 6 cleric"];
dwarfPtrl = ["2 dwarfs","3 dwarfs","3 dwarfs","4 dwarfs and level 1 fighter","4 dwarfs","5 dwarfs","5 dwarfs and level 1 fighter","5 dwarfs and level 2 fighter","6 dwarfs","6 dwarfs and level 1 fighter","6 dwarfs and level 2 fighter","6 dwarfs and level 3 fighter","7 dwarfs and level 1 fighter","7 dwarfs and level 2 fighter","7 dwarfs and level 3 fighter","7 dwarfs and level 4 fighter","7 dwarfs and level 5 fighter","7 dwarfs and level 6 fighter","8 dwarfs and level 3 fighter","8 dwarfs and level 4 fighter","8 dwarfs and level 5 fighter","8 dwarfs and level 6 fighter","9 dwarfs and level 4 fighter","9 dwarfs and level 5 fighter","9 dwarfs and level 6 fighter","10 dwarfs and level 5 fighter","10 dwarfs and level 6 fighter","11 dwarfs and level 5 fighter","11 dwarfs and level 6 fighter","12 dwarfs and level 6 fighter"];
elfPtrl = ["2 elves","3 elves","3 elves","4 elves","5 elves","5 elves","5 elves","5 elves","6 elves","6 elves","6 elves","6 elves","7 elves","7 elves","7 elves","7 elves","7 elves","7 elves","8 elves","8 elves","8 elves","8 elves","9 elves","9 elves","9 elves","10 elves","10 elves","11 elves","11 elves","12 elves"];
halfPtrl = ["2 light footmen","3 light footmen","3 heavy footmen","4 light footmen","4 light footmen and level 1 fighter","4 heavy footmen and level 1 fighter","5 light footmen and level 1 fighter","5 heavy footmen and level 1 fighter","6 light footmen and level 1 fighter","6 light footmen and level 2 fighter","6 heavy footmen and level 1 fighter","6 heavy footmen and level 2 fighter","7 light footmen and level 2 fighter","7 light footmen and level 3 fighter","7 light footmen and level 4 fighter","7 heavy footmen and level 2 fighter","7 heavy footmen and level 3 fighter","7 heavy footmen and level 4 fighter","8 light footmen and level 3 fighter","8 light footmen and level 4 fighter","8 heavy footmen and level 3 fighter","8 heavy footmen and level 4 fighter","9 light footmen and level 4 fighter","9 heavy footmen and level 4 fighter","9 heavy footmen and level 5 fighter","10 light footmen and level 5 fighter","10 heavy footmen and level 5 fighter","11 light footmen and level 5 fighter","11 heavy footmen and level 5 fighter","12 heavy footmen and level 6 fighter"];
fcFortType = ["keep/square","keep/round","keep/shell","towers/square","towers/round","concentric"];
mageFortType = ["round/sloped","round/straight","round/stepped","square/sloped","square/straight","square/stepped"];
dwarfFortType = ["centralized/flat","spread/concave","spread/convex","modular/towered","hidden/disguised by or as mountains","underground","freestanding"];
halfFortType = ["mounds/walled","mounds/hidden &mdash; usually by magical means (e.g., through the aid of a high-level magic-user employing the use of a mass invisibility or hallucinatory terrain spell)","mounds & trees/walled","mounds & trees/hidden &mdash; usually by magical means (e.g., through the aid of a high-level magic-user employing the use of a mass invisibility or hallucinatory terrain spell)","castle/walled","castle/hidden &mdash; usually by magical means (e.g., through the aid of a high-level magic-user employing the use of a mass invisibility or hallucinatory terrain spell)"];
function bldFcFort(fortType,fortSize) {
    let cnt,descrip;
    document.getElementById("typeRslt").innerHTML = "castle &mdash; " + fcFortType[fortType];
    if (fortType === 2 || fortType === 5) {
        if (fortSize === 1) {
            cnt = rollDie(1,2) + 1;
        } else if (fortSize === 2) {
            cnt = rollDie(1,2) + 2;
        } else if (fortSize === 3) {
            cnt = rollDie(1,2) + 3;
        } else if (fortSize === 4) {
            cnt = rollDie(1,2) + 4;
        } else {
            cnt = rollDie(1,2) + 5;
        }
    } else {
        //number from 1st column
        if (fortSize === 1) {
            cnt = rollDie(1,2) + 1;
        } else if (fortSize === 2) {
            cnt = rollDie(1,3) + 2;
        } else if (fortSize === 3) {
            cnt = rollDie(1,3) + 4;
        } else if (fortSize === 4) {
            cnt = rollDie(1,5) + 6;
        } else {
            cnt = rollDie(1,6) + 10;
        }
    }
    switch (fortType) {
        case 0:
        case 1:
            descrip = " levels";
            break;
        case 2:
            descrip = " rings";
            break;
        case 3:
        case 4:
            descrip = " towers";
            break;
        case 5:
            descrip = " castles";
    }
    document.getElementById("sizeRslt").innerHTML = cnt + descrip;
}
function bldMageFort(fortType,fortSize) {
    let cnt;
    document.getElementById("typeRslt").innerHTML = "tower &mdash; " + mageFortType[fortType];
    if (fortSize === 1) {
        cnt = rollDie(1,2) + 1;
    } else if (fortSize === 2) {
        cnt = rollDie(1,3) + 2;
    } else if (fortSize === 3) {
        cnt = rollDie(1,3) + 4;
    } else if (fortSize === 4) {
        cnt = rollDie(1,5) + 6;
    } else {
        cnt = rollDie(1,6) + 10;
    }
    document.getElementById("sizeRslt").innerHTML = cnt + " levels";
}
function bldElfFort(fortType,fortSize) {
    let cnt,cnt2;
    let descrip = " trees and ";
    let descrip2 = " levels per tree";
    document.getElementById("typeRslt").innerHTML = "tree stronghold";
    if (fortSize === 1) {
        cnt = rollDie(1,2);
    } else if (fortSize === 2) {
        cnt = rollDie(1,2) + 1;
    } else if (fortSize === 3) {
        cnt = rollDie(1,3) + 3;
    } else if (fortSize === 4) {
        cnt = rollDie(1,5) + 6;
    } else {
        cnt = rollDie(1,6) + 10;
    }
    if (cnt === 1) {
        descrip = " tree and ";
    }
    switch (fortType) {
        case 0:
            cnt2 = 1;
            break;
        case 1:
            cnt2 = rollDie(1,2);
            break;
        case 2:
            cnt2 = rollDie(1,3);
            break;
        case 3:
            cnt2 = rollDie(1,5);
            break;
        case 4:
            cnt2 = rollDie(1,6);
            break;
        case 5:
            cnt2 = rollDie(1,10);
    }
    if (cnt2 === 1) {
        descrip2 = " level per tree";
    }
    document.getElementById("sizeRslt").innerHTML = cnt + descrip + cnt2 + descrip2;
}
function bldDwarfFort(fortType,fortSize) {
    let cnt;
    let descrip = " levels";
    if (fortType === 5) {
        if (rollDie(1,2) < 2) {
            fortType = 6;
        }
    }
    document.getElementById("typeRslt").innerHTML = "mountain stronghold &mdash; " + dwarfFortType[fortType];
    if (fortSize === 1) {
        cnt = rollDie(1,2);
    } else if (fortSize === 2) {
        cnt = rollDie(1,2) + 1;
    } else if (fortSize === 3) {
        cnt = rollDie(1,3) + 3;
    } else if (fortSize === 4) {
        cnt = rollDie(1,5) + 6;
    } else {
        cnt = rollDie(1,6) + 10;
    }
    if (cnt === 1) {
        descrip = " level";
    }
    document.getElementById("sizeRslt").innerHTML = cnt + descrip;
}
function bldHalfFort(fortType,fortSize) {
    let descrip;
    let count,count2;
    function counter() {
        let cnt;
        if (fortSize === 1) {
            cnt = rollDie(1,2) + 1;
        } else if (fortSize === 2) {
            cnt = rollDie(1,3) + 2;
        } else if (fortSize === 3) {
            cnt = rollDie(1,3) + 4;
        } else if (fortSize === 4) {
            cnt = rollDie(1,5) + 6;
        } else {
            cnt = rollDie(1,6) + 10;
        }
        return cnt;
    }
    document.getElementById("typeRslt").innerHTML = "shire &mdash; " + halfFortType[fortType];
    switch (fortType) {
        case 0:
        case 1:
            count = counter()*2;
            descrip = count + " mounds";
            break;
        case 2:
        case 3:
            count = counter();
            count2 = counter();
            descrip = count + " mounds and " + count2 + " trees";
            break;
        case 4:
        case 5:
            count = counter();
            descrip = count + " towers";
    }
    document.getElementById("sizeRslt").innerHTML = descrip;
}
$("#castleRoll").click(function () {
    let lvlChoice = parseInt($("input[name=lvlPck]:checked").val());
    let owner,ownerLvl,lvlPtrl,adjuster;
    let lvlChoose = [];
    let roll1 = rollDie(1,30); //for owner class
    let roll2 = rollDie(0,29); //for random patrol
    let fortType = rollDie(0,5);
    let fortSize = rollDie(1,5);
    if (roll1 < 9) {
        owner = "fighter";
        ownerLvl = rollDie(9,16);
        if (lvlChoice) {
            lvlChoose = fightSpread[ownerLvl -9];
            adjuster = rollDie(lvlChoose[0],lvlChoose[1]);
        } else {
            adjuster = roll2;
        }
        lvlPtrl = fightPtrl[adjuster];
        //adjust patrol description
        //griffon check
        if (adjuster > 18) {
            if (rollDie(1,3) < 2) {
                lvlPtrl = lvlPtrl.replace("horsemen", "griffon riders");
                let replacer = parseInt(lvlPtrl.match(/^\d+/));
                lvlPtrl = lvlPtrl.replace(/^\d+/, Math.round(replacer/2));
            }
        }
        //magic user/cleric check
        if (adjuster > 13) {
            let roller = rollDie(1,6);
            if (roller === 1) {
                let mageStr = magicPtrl[adjuster];
                lvlPtrl += mageStr.slice(mageStr.indexOf("fighter")+7);
            } else if (roller === 2) {
                let clericStr = clericPtrl[adjuster];
                lvlPtrl += clericStr.slice(clericStr.indexOf("horsemen")+8);
            }
        }
        //extraordinary creature check
        if (adjuster > 19) {
            if (rollDie(1,3) < 2) {
                lvlPtrl += "and extraordinary creature (e.g. ogre) (at DM's discretion)";
            }
        }
        //determine stronghold
        bldFcFort(fortType,fortSize);
    } else if (roll1 < 15) {
        owner = "magic user";
        ownerLvl = rollDie(11,16);
        if (lvlChoice) {
            lvlChoose = magicSpread[ownerLvl -11];
            adjuster = rollDie(lvlChoose[0],lvlChoose[1]);
        } else {
            adjuster = roll2;
        }
        lvlPtrl = magicPtrl[adjuster];
        //adjust patrol description
        //griffon check
        if (adjuster > 18) {
            if (rollDie(1,3) < 2) {
                lvlPtrl = lvlPtrl.replace("footmen", "footmen on griffons");
                let replacer = parseInt(lvlPtrl.match(/^\d+/));
                lvlPtrl = lvlPtrl.replace(/^\d+/, Math.round(replacer/2));
            }
        }
        //extraordinary creature check
        if (adjuster > 19) {
            if (rollDie(1,3) < 2) {
                lvlPtrl += " and extraordinary creature (e.g. ogre) (at DM's discretion)";
            }
        }
        //determine stronghold
        bldMageFort(fortType,fortSize);
    } else if (roll1 > 28) {
        owner = "halfling (fighter)";
        ownerLvl = rollDie(9,10);
        if (lvlChoice) {
            if (ownerLvl === 9) {
                adjuster = rollDie(0,14);
            } else {
                adjuster = rollDie(15,29);
            }
        } else {
            adjuster = roll2;
        }
        lvlPtrl = halfPtrl[adjuster];
        //adjust patrol description
        if (adjuster > 19) {
            if (rollDie(1,3) < 2) {
                let mageStr = magicPtrl[adjuster];
                lvlPtrl += mageStr.slice(mageStr.indexOf("fighter")+7);
            }
        }
        //determine stronghold
        bldHalfFort(fortType,fortSize);
    } else if (roll1 > 26) {
        owner = "elf (fighter/magic user)";
        ownerLvl = rollDie(9,10);
        if (lvlChoice) {
            if (ownerLvl === 9) {
                adjuster = rollDie(0,14);
            } else {
                adjuster = rollDie(15,29);
            }
        } else {
            adjuster = roll2;
        }
        lvlPtrl = elfPtrl[adjuster];
        //determine stronghold
        bldElfFort(fortType,fortSize);
    } else if (roll1 > 24) {
        owner = "dwarf (fighter)";
        ownerLvl = rollDie(9,10);
        if (lvlChoice) {
            if (ownerLvl === 9) {
                adjuster = rollDie(0,14);
            } else {
                adjuster = rollDie(15,29);
            }
        } else {
            adjuster = roll2;
        }
        lvlPtrl = dwarfPtrl[adjuster];
        //determine stronghold
        bldDwarfFort(fortType,fortSize);
    } else {
        owner = "cleric";
        ownerLvl = rollDie(7,16);
        if (lvlChoice) {
            lvlChoose = clericSpread[ownerLvl -7];
            adjuster = rollDie(lvlChoose[0],lvlChoose[1]);
        } else {
            adjuster = roll2;
        }
        lvlPtrl = clericPtrl[adjuster];
        //determine stronghold
        bldFcFort(fortType,fortSize);
    }
    document.getElementById("ownerRslt").innerHTML = "level " + ownerLvl + " " + owner;
    document.getElementById("patrolRslt").innerHTML = lvlPtrl;
    //determine construction
    let constRoll = rollDie(1,30);
    let constDescrip;
    if (constRoll > 24 || constRoll === 7) {
        constDescrip = "partially inoperational/destroyed";
    } else if (constRoll > 19 || constRoll === 6) {
        constDescrip = "in need of major repair";
    } else if (constRoll > 15 || constRoll === 5) {
        constDescrip = "in need of minor repair";
    } else if (constRoll > 12 || constRoll === 4) {
        constDescrip = "well-worn";
    } else if (constRoll > 9 || constRoll === 3) {
        constDescrip = "good condition, some age";
    } else if (constRoll > 7 || constRoll === 2) {
        constDescrip = "newly completed";
    } else {
        constDescrip = "partially constructed";
    }
    if (constRoll > 7) {
        constDescrip += " &mdash; Secondary/Newer Area: ";
        switch (constRoll) {
            case 8:
            case 10:
            case 13:
            case 16:
            case 20:
            case 25:
                constDescrip += "partially constructed";
                break;
            case 9:
            case 11:
            case 14:
            case 17:
            case 21:
            case 26:
                constDescrip += "newly completed";
                break;
            case 12:
            case 15:
            case 18:
            case 22:
            case 27:
                constDescrip += "good condition, some age";
                break;
            case 19:
            case 23:
            case 28:
                constDescrip += "well-worn";
                break;
            case 24:
            case 29:
                constDescrip += "in need of minor repair";
                break;
            case 30:
                constDescrip += "in need of major repair";
        }
    }
    document.getElementById("constRslt").innerHTML = constDescrip;
});