//heraldry pages 28 & 29
let shields = ["solid","per pale","per fess","quartered","quarterly of 6","canton","per bend","per bend sinister","per saltire","tierced in pale","tierced in pale reversed","gyrrony of 8","pale","bars","bend","paly of 6","barry of 6","bendy of 8","per chevron","per chevron reversed","chevron","chief","fess","pall","inescutcheon","bordure","cross","per pale indented","chape-ploye","chief embattled"];
let charges = ["cross: bottony","cross: flory","cross: moline","cross: pattee","cross: patonce","cross: potent","cross: crosslet","sun (in splendor)","moon (in plenitude)","star","estoile","garb of wheat","fleur de lis","crown","knight on horseback","sword","crossed swords","crossed axes","lion (rampant)","bear (rampant)","griffon (rampant)","unicorn (rampant)","panther (rampant)","dragon (passant)","eagle (displayed)","2-head eagle (displayed)","lion head","eagle head","dragon head","unicorn head"];
let colorChart = [["metal","argent","silver or white","sincerity, peace"],["metal","or","gold or yellow","generosity"],["color","azure","blue","strength, loyalty"],["color","gules","red","warrior, martyr, military strength"],["color","purpure","purple or violet","justice, sovereignty, regal"],["color","sable","black","constancy, grief"],["color","vert","green","hope, loyalty in love"],["stain","murrey","mulberry","victorious, patient in battle"],["stain","sanguine","blood red or dark red","victorious, patient in battle"],["stain","tenné","brown or orange","worthwhile ambition"],["rare","bleu celeste","light blue or sky blue","strength, loyalty"],["rare","carnation","skin tone","worthwhile ambition"],["rare","cendreé","grey","sincerity, peace"],["rare","marron","brown or earth color","worthwhile ambition"],["rare","brunâtre","brown","worthwhile ambition"],["rare","acqua","water color","strength, loyalty"],["rare","cendrée","ashen grey","sincerity, peace"],["fur","ermine","white field with black ermine spots","valor, justice, dignity"],["fur","ermines","black field with white ermine spots","valor, justice, dignity"],["fur","erminois","yellow field with black ermine spots","valor, justice, dignity"],["fur","pean","black field with yellow ermine spots","valor, justice, dignity"],["fur","vair","bell shapes alternating (blue/white)","guardian of peace"],["fur","vair","bell shapes alternating (red/gold)","guardian of peace"],["fur","counter-vair","bell shapes aligned (blue/white)","guardian of peace"],["fur","vair in pale","bell shapes in vertical lines (blue/white)","guardian of peace"],["fur","vair en pointe","bell shapes in zig-zag lines (blue/white)","guardian of peace"],["fur","potent","T shapes alternating (blue/white)","guardian of peace"],["fur","counter-potent","T shapes aligned (blue/white)","guardian of peace"],["fur","papelonne","fish scale pattern (blue/white)","guardian of peace"],["fur","plumeté","feathered pattern (blue/white)","guardian of peace"]];
let quad = ["cougar","lion","tiger","antelope","badger","bear","bison","boar","buffalo","bull","calf","cow","deer, hart","deer, doe","dog","elk","goat","horse","ermine","lamb","ox","pig","ram","rat","sheep","wildcat","wolverine","fox","leopard","wolf"];
let birds = ["albatross","auk","blackbird","canary","cardinal","cock","crane","crow","dodo","dove","duck","emu","falcon","goose","gull","hawk","heron","kingfisher","magpie","ostrich","owl","peacock","partridge","pheasant","raven","stork","swallow","swan","woodpecker","wren"];
let rareAn = ["ape","badger","bat","beaver","elephant","gopher","hedgehog","monkey","porcupine","raccoon","squirrel","walrus","crocodile","lizard","pike","salamander","salmon","snake/serpent","ant","anthill","bee","beetle (stag)","butterfly","dragonfly","grasshopper","earthworm","fly","slug","snail","spider"];
let extra = ["chimera","cockatrice","dragon","griffin","hippogriff","pegasus","phoenix","shedu","sphinx","wyvern"];
let fish = ["mermaid","octopus","seahorse","dolphin","hippocampus","lobster","manatee","ray","salmon","sea-lion","shark","swordfish","tigerfish","whale","eel"];
let plants = ["flower, fleur-de-lis","flower, trefoil","flower, quatrefoil","flower, cinquefoil","flower, sexfoil","flower, lavender","flower, rose","fruit, apple (tree)","fruit, cherry","fruit, pear (tree)","fruit, grape(vine)","nut, acorn","hay/rye/wheat","tree, alder","tree, beech","tree, birch","tree, cedar","tree, elm","tree, fir","tree, oak","tree, pine","tree, poplar","tree, willow","tree, dead","other, artichoke","other, bush","other, cattail","other, fern","other, holly","other, thorns"];
let otherMisc = ["axe","broadsword","dagger","flail","glaive","halberd","hammer","rapier","scimitar","spear","sword","trident","bow","crossbow","sickle","belfry","bridge","castle","cloud","diamond","harp","ladder","lightning bolt","lyre","mountain","scales","ship","steeple","volcano","windmill"];
$("#shieldRoll").click(function () {
    let roll = rollDie(1,30);
    let rollClr = rollDie(1,6);
    let rollClr1,clrVal,r,result1,result2,result3;
    let testr = "../images/heraldry/shield-" + roll + ".gif";
    $("#shield").attr("src", testr).removeClass("hideIt");
    //determine colors
    if (rollClr > 5) {
        rollClr1 = rollDie(0,29);
    } else {
        rollClr1 = rollDie(0,9);
    }
    //clrVal will hold 3 unique numbers for assigning colors
    clrVal = [rollClr1];
    while (clrVal.length < 3) {
        r = rollDie(0,9);
        if (clrVal.indexOf(r) === -1) {
            clrVal.push(r);
        }
    }
    result1 = "<h4>Main/background Color:</h4> " + colorChart[clrVal[0]][1] + " (" + colorChart[clrVal[0]][0] + ")<br>";
    result1 += "<h4>Description:</h4> " + colorChart[clrVal[0]][2] + "<br>";
    result1 += "<h4>Meaning:</h4> " + colorChart[clrVal[0]][3];
    result2 = "<h4>2nd Color:</h4> " + colorChart[clrVal[1]][1] + " (" + colorChart[clrVal[1]][0] + ")<br>";
    result2 += "<h4>Description:</h4> " + colorChart[clrVal[1]][2] + "<br>";
    result2 += "<h4>Meaning:</h4> " + colorChart[clrVal[1]][3];
    document.getElementById("clrValue1").innerHTML = result1;
    document.getElementById("clrValue2").innerHTML = result2;
    //if shield 10 or 11 came up, assign a 3rd color
    if (roll === 10 || roll === 11) {
        result3 = "<h4>3rd Color:</h4> " + colorChart[clrVal[2]][1] + " (" + colorChart[clrVal[2]][0] + ")<br>";
        result3 += "<h4>Description:</h4> " + colorChart[clrVal[2]][2] + "<br>";
        result3 += "<h4>Meaning:</h4> " + colorChart[clrVal[2]][3];
        document.getElementById("clrValue3").innerHTML = result3;
    } else {
        document.getElementById("clrValue3").innerHTML = "";
    }
    //set the description text for the shield
    $("#sign1").text(shields[roll-1]);
});
$("#chargeRoll").click(function () {
    let roll = rollDie(1,30);
    let testr = "../images/heraldry/charge-" + roll + ".gif";
    $("#charge").attr("src", testr).removeClass("hideIt");
    $("#sign2").text(charges[roll-1]);
});
//other charges
$("input[name=charges]").change(function () {
    let result,roll;
    switch (this.value) {
        case "quadruped":
            roll = rollDie(0,29);
            result = quad[roll];
            if (roll < 3) {
                if (rollDie(1,3) < 2) {
                    result = "winged " + result;
                }
            }
            if (roll > 26) {
                if (rollDie(1,3) < 2) {
                    result = "arctic/snow " + result;
                }
            }
            switch (rollDie(1,3)) {
                case 1:
                    result += " head (only)";
                    break;
                case 2:
                    result += " passant";
                    break;
                default:
                    result += " rampant";
            }
            break;
        case "birds":
            result = birds[rollDie(0,29)];
            switch (rollDie(1,3)) {
                case 1:
                    result += " displayed";
                    break;
                case 2:
                    result += " roussant";
                    break;
                default:
                    result += " trussed";
            }
            break;
        case "rare":
            result = rareAn[rollDie(0,29)];
            if (result === "salamander") {
                if (rollDie(1,5) < 2) {
                    result += " spits flame";
                }
            } else if (result === "snake/serpent") {
                if (rollDie(1,10) < 2) {
                    result = "winged " + result;
                }
                if (rollDie(1,2) < 2) {
                    result += " glissant";
                } else {
                    result += " nowed";
                }
            }
            break;
        case "extra":
            result = extra[rollDie(0,9)];
            switch (rollDie(1,3)) {
                case 1:
                    result += " displayed";
                    break;
                case 2:
                    result += " roussant";
                    break;
                default:
                    result += " trussed";
            }
            break;
        case "fish":
            roll = rollDie(0,14);
            result = fish[roll];
            if (roll === 0) {
                if (rollDie(1,3) < 2) {
                    result = "two-tailed " + result;
                }
            }
            if (roll > 2) {
                if (rollDie(1,2) < 2) {
                    result += " naiant";
                } else {
                    result += " hauriant";
                }
            }
            break;
        case "plants":
            roll = rollDie(0,29);
            result = plants[roll];
            if (roll === 23) {
                if (rollDie(1,2) < 2) {
                    result = "oak " + result;
                } else {
                    result = "pine " + result;
                }
            }
            if (roll === 25) {
                if (rollDie(1,5) < 2) {
                    result += " (burning)";
                }
            }
            break;
        case "misc":
            roll = rollDie(0,29);
            result = otherMisc[roll];
            if (roll < 12) {
                if (rollDie(1,2) < 2) {
                    result += ", two crossed";
                }
            }
    }
    document.getElementById("altCharge").innerHTML = result;
});