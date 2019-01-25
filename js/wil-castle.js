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
$("#castleRoll").click(function () {
    let lvlChoice = parseInt($("input[name=lvlPck]:checked").val());
    let owner,ownerLvl,lvlPtrl,adjuster;
    let lvlChoose = [];
    let roll1 = rollDie(1,30); //for owner class
    let roll2 = rollDie(0,29); //for random patrol
    //determine owner & patrol info
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
    }
    document.getElementById("ownerRslt").innerHTML = "level " + ownerLvl + " " + owner;
    document.getElementById("patrolRslt").innerHTML = lvlPtrl;
});