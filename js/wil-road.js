//road encounters page 24 & 25
function merchant() {
    roadRslt.innerHTML = "<strong>merchant:</strong> " + "<span id='occupationInfo'></span>" + " <strong>Employ:</strong> " + "<span id='occup2'></span>" + " <strong>Offering:</strong> " + "<span id='occup3'></span>" + " <strong>Temperament:</strong> " + "<span id='occup4'></span>";
    jobMaker("merchant");
    merchDetails();
}
function marker() {
    let markType = ["cairn","carving in rock","plaque (stone/ground)","pyre (remnants)","staff/pole","pile of rocks/stones","runed sign (wood)","runed stone","sign (wood)","totem"];
    let age = ["fresh/newly constructed","recent/some coverage","old/worn/overgrown"];
    roadRslt.innerHTML = "Marker &mdash; " + markType[rollDie(0,9)] + " (" + age[rollDie(0,2)] + ")";
}
function remains() {
    let typeArray = ["bugbear","dwarf","elf","gnome","gnoll","goblin","half-elf","half-orc","halfling","hobgoblin","human","kobold","orc","unknown demi-human","unknown humanoid 4-5 feet tall","unknown humanoid 5-6 feet tall","unknown humanoid 6-7 feet tall"];
    let property = ["burned","covered in dirt/buried","covered in vines","covered with rocks","crystallized/petrified","decayed","diseased","disfigured/beaten","eaten/devoured","wormeaten/infested"];
    let degree = ["slightly/barely","moderately/noticeably","severely/extremely"];
    let roll1 = rollDie(0,29);
    let gender = "male";
    if (roll1 > 16) {
        roll1 -= 17;
        gender = "female";
    } else if (roll1 > 12) {
        gender = "unknown";
    }
    roadRslt.innerHTML = "Remains of " + typeArray[roll1] + " gender: " + gender + " &mdash; Possessions are " + property[rollDie(0,9)] + " (" + degree[rollDie(0,2)] + ")";
}
function traveling() {
    let eventArray = ["bandits (3-18 1st level thieves)","group, pilgrims (3-18 1st level clerics)","group, recruits (3-18 1st level fighters)","beggar","caravan, merchants","caravan, migrant workers (3-12 families)","caravan, circus (3-12 feature animals, 20-30 circus folk)","caravan, troupe of performers (jugglers/acrobats)","caravan, gypsies (fortune tellers, etc.)","cart driver, hauling livestock","cart driver, hauling lumber","cart driver, hauling slaves","funeral procession","individual, good-for-nothing seeking to join thieves guild (level 0 thief)","individual, faithful person seeking to join religious order (level 0 cleric)","individual, seeking tutelage in magic (level 0 magic user)","individual, seeking to join army/guard (level 0 fighter)","messenger on assignment","party of adventurers, novice (1st-3rd levels)","party of adventurers, seasoned (4th-7th levels)","party of adventurers, legendary (level 8+)","soldiers, escorting diplomat(s)","soldiers, escorting criminal(s)","soldiers, escorting political prisoner(s)","soldiers, returning from assignment","traveler, royalty (with attendants)","travelers, family","individual, fugitive (disguised)","individual, shamed religious man (nude, flogging self)","traveler, individual"];
    let roll = rollDie(0,29);
    let result = eventArray[roll];
    if (roll < 3) {
        result = result.replace("3-18",rollDie(1,6) + rollDie(1,6) + rollDie(1,6));
    } else if (roll === 3) {
        //4th, beggar
        if (rollDie(1,3) < 3) {
            result += " follows PCs and continues to beg";
        }
    } else if (roll === 5 || roll === 6) {
        result = result.replace("3-12",rollDie(1,4) + rollDie(1,4) + rollDie(1,4));
    } else if (roll > 26) {
        let roll2 = rollDie(1,3);
        if (roll2 < 2) {
            result += " (young)";
        } else if (roll > 2) {
            result += " (old)";
        } else {
            result += " (mature)";
        }
    }
    roadRslt.innerHTML = result;
}
function hostile() {
    let result = "hostile encounter &mdash; ";
    let roll = rollDie(1,30);
    let morale,feeling,outcome;
    if (roll < 6) {
        morale = 7;
    } else if (roll < 11) {
        morale = 8;
    } else if (roll < 16) {
        morale = 9;
    } else if (roll < 21) {
        morale = 10;
    } else if (roll < 26) {
        morale = 11;
    } else {
        morale = 12;
    }
    switch (roll) {
        case 1:
        case 6:
        case 11:
        case 16:
        case 21:
        case 26:
            feeling = "neutral";
            break;
        case 2:
        case 7:
        case 12:
        case 17:
        case 22:
        case 27:
            feeling = "unfriendly";
            break;
        case 3:
        case 8:
        case 13:
        case 18:
        case 23:
        case 28:
            feeling = "acrimonious";
            break;
        case 4:
        case 9:
        case 14:
        case 19:
        case 24:
        case 29:
            feeling = "malevolent";
            break;
        case 5:
        case 10:
        case 15:
        case 20:
        case 25:
        case 30:
            feeling = "malicious";
    }
    switch (roll) {
        case 1:
            outcome = "bargain";
            break;
        case 2:
        case 6:
            outcome = "parlay";
            break;
        case 11:
        case 7:
        case 3:
            outcome = "antagonize";
            break;
        case 16:
        case 12:
        case 8:
        case 4:
            outcome = "threaten/bully";
            break;
        case 21:
        case 26:
        case 17:
        case 22:
        case 13:
        case 18:
        case 9:
        case 14:
        case 5:
        case 10:
            outcome = "attack";
            break;
        case 27:
        case 23:
        case 28:
        case 19:
        case 24:
        case 15:
        case 20:
            outcome = "attack/pursue";
            break;
        case 29:
        case 25:
        case 30:
            outcome = "attack/no quarter";
    }
    result += feeling + " group will " + outcome + ", their morale: " + morale;
    roadRslt.innerHTML = result;
    attack();
}
function attack(event) {
    let roll1 = rollDie(1,6);
    let roll2 = rollDie(1,5);
    let treasCol = rollDie(0,2);
    let treasNum = rollDie(0,9);
    let result = "";
    let parSiz,lvlAtt,column,i;
    let hoard = "";
    let treasure = [["1,000 c.p.","+1,000 s.p.","+250 e.p.","+2,000 g.p.","+2,000 g.p.","+250 p.p","+6 gems","+6 jewelry items","+1 magic item","+1 magic item"],["2,000 c.p.","+2,000 s.p.","+500 e.p.","+3,000 g.p.","+3,000 g.p.","+500 p.p.","+12 gems","+12 jewelry items","+1 magic item","+1 magic items"],["3,000 c.p.","+3,000 s.p.","+1,000 e.p.","+4,000 g.p.","+4,000 g.p.","+1,000 p.p.","+18 gems","+18 jewelry items","+1 magic item","+2 magic items"],["4,000 c.p.","+4,000 s.p.","+1,500 e.p.","+5,000 g.p.","+5,000 g.p.","+1,500 p.p.","+24 gems","+24 jewelry items","+2 magic items","+1 magic item"],["5,000 c.p.","+5,000 s.p.","+2,000 e.p.","+6,000 g.p.","+6,000 g.p.","+2,000 p.p.","+30 gems","+30 jewelry items","+2 magic items","+1 magic item"]];
    if (event === "attack") {
        result = event;
    } else if (event === "ambush") {
        result = "ambush/surprise attack";
    }
    if (result) {
        roadRslt.innerHTML = result;
    }
    switch (roll1) {
        case 1:
            parSiz = -2;
            break;
        case 2:
            parSiz = -1;
            break;
        case 3:
            parSiz = 0;
            break;
        case 4:
            parSiz = 1;
            break;
        case 5:
            parSiz = 2;
            break;
        case 6:
            parSiz = 3;
    }
    switch (roll2) {
        case 1:
            lvlAtt = -2;
            break;
        case 2:
            lvlAtt = -1;
            break;
        case 3:
            lvlAtt = 0;
            break;
        case 4:
            lvlAtt = 1;
            break;
        case 5:
            lvlAtt = 2;
    }
    document.getElementById("lvlRslt").innerHTML = lvlAtt;
    document.getElementById("sizRslt").innerHTML = parSiz;
    if (roll1 < 3) {
        column = 0;
    } else if (roll1 > 4) {
        column = 2;
    } else {
        column = 1;
    }
    for (i=0;i<treasNum+1;i++) {
        hoard += treasure[column + treasCol][i] + "<br>";
    }
    if (treasNum > 5) {
        hoard += "gem/jewelry value 100 gp each";
    }
    document.getElementById("treasRslt").innerHTML = hoard;
    $(atBox).removeClass("hideIt");
}
let roadRslt = document.getElementById("roadRslt");
let atBox = document.getElementById("attackBox");
$("#roadRoll").click(function () {
    let densRslt = parseInt($("input[name=densPck]:checked").val());
    let roll1 = rollDie(1,30);
    $(atBox).addClass("hideIt");
    switch (densRslt) {
        case 0: //desolate
            if (roll1 > 29) {
                attack("ambush");
            } else if (roll1 > 24) {
                attack("attack");
            } else if (roll1 > 22) {
                hostile();
            } else if (roll1 > 19) {
                remains();
            } else if (roll1 > 16) {
                marker();
            } else {
                roadRslt.innerHTML = "no encounter";
            }
            break;
        case 1: //unsettled
            if (roll1 > 29) {
                attack("ambush");
            } else if (roll1 > 24) {
                attack("attack");
            } else if (roll1 > 17) {
                hostile();
            } else if (roll1 > 16) {
                traveling();
            } else if (roll1 > 13) {
                remains();
            } else if (roll1 > 9) {
                marker();
            } else {
                roadRslt.innerHTML = "no encounter";
            }
            break;
        case 2: //frontier
            if (roll1 > 26) {
                attack("ambush");
            } else if (roll1 > 20) {
                attack("attack");
            } else if (roll1 > 15) {
                hostile();
            } else if (roll1 > 14) {
                merchant();
            } else if (roll1 > 13) {
                traveling();
            } else if (roll1 > 10) {
                remains();
            } else if (roll1 > 6) {
                marker();
            } else {
                roadRslt.innerHTML = "no encounter";
            }
            break;
        case 3: //scattered
            if (roll1 > 26) {
                attack("ambush");
            } else if (roll1 > 20) {
                attack("attack");
            } else if (roll1 > 17) {
                hostile();
            } else if (roll1 > 12) {
                merchant();
            } else if (roll1 > 7) {
                traveling();
            } else if (roll1 > 4) {
                remains();
            } else if (roll1 > 2) {
                marker();
            } else {
                roadRslt.innerHTML = "no encounter";
            }
            break;
        case 4: //dense
            if (roll1 > 27) {
                attack("ambush");
            } else if (roll1 > 22) {
                attack("attack");
            } else if (roll1 > 15) {
                hostile();
            } else if (roll1 > 9) {
                merchant();
            } else if (roll1 > 4) {
                traveling();
            } else if (roll1 > 3) {
                remains();
            } else {
                marker();
            }
    }
});