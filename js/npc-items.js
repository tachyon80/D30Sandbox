//items and magic items pages 40 & 41
let fightEquip = ["battle axe","war hammer","broad sword","long sword","2-handed sword","2-handed pole arm"];
let fightEquip2 = ["short bow","long bow","crossbow"];
let fightArmr = ["leather","chain","plate"];
let elfEquip = ["long bow","short bow","dagger","short sword","long sword"];
let dwarfEquip = ["hand axe","throwing axe","war hammer","mace","sword"];
let halfEquip = ["hand axe","dagger","mace","short sword","short bow","crossbow"];
let clericEquip = ["club","mace","hammer","shield","holy symbol","holy water"];
let druidEquip = ["club","dagger","hammer","spear","staff"];
let magEquip1 = ["bo staff","dagger","jo staff","dagger + bo staff","dagger + jo staff","dagger + darts","bo staff + darts","jo staff + darts","dagger + bo staff + darts","dagger + jo staff + darts"];
let magEquip2 = ["parchment","quill and ink","parchment, quill and ink"];
let thiefEquip = ["club","dagger","broad sword","short sword","long sword","darts","poison","darts + poison"];
let monkEquip = ["bo staff","club","crossbow","dagger","hand axe","javelin","jo staff","polearm","spear","staff"];
let rings1 = ["control animal","feather falling","fire resistance","free action","invisibility","protection +1","swimming","telekinesis","warmth","water walking"];
let rings2 = ["control plant","control human","control undead","djinni summoning","invisibility","protection +1 - 5 foot radius","regeneration","spell storing","spell turning","x-ray vision"];
let wands1 = ["charm (person)","fear","illusion","magic missiles","webs","trap detection","enemy detection","magic detection","metal detection","secret door detection"];
let wands2 = ["cold (B/X)/frost (1e)","charm (monster)","fireballs (B/X)/fire (1e)","illusion","lightning (bolts)","negation","paralyzation","polymorphing","(staff of) striking","(ring of) spell storing"];
let potions1 = ["diminution","climbing","cold resistance","ESP","fire resistance","gaseous form","growth","healing","invisibility","levitation"];
let potions2 = ["clairaudience","clairvoyance","control animal","control person","control undead","giant strength","heroism","invulnerability","polymorph self","speed"];
let misc1 = ["bag of holding","bracers of defense (AC8)","brooch of shielding","broom of flying","elven boots","elven cloak","ring of protection +1","rope of climbing"];
let misc2 = ["amulet vs. spying (vs. crystal balls and ESP)","bracers of defense (AC7)","boots of levitation","boots of speed","elven cloak & boots","displacer cloak","flying carpet","helm of reading languages and magic","horn of blasting","medallion of ESP"];
let swordItem = ["+1 - +2 vs. lycanthropes","+1 - +2 vs. dragons","+1 - +2 vs. enchanted","+1 - +2 vs. regenerating","+1 - +2 vs. spell users","+1 - +2 vs. undead","+1 - flaming","+1 - light (30' radius)","+1 - locate object","+2"];
let fightItem = ["boots of speed","boots of levitation","gauntlets of ogre strength","girdle of giant strength","elven cloak and boots","helm of telepathy","horn of blasting","ring: protection +2","ring of regeneration","bracers of defense (AC7)"];
let clerItem = ["staff of healing","staff of snake","staff of commanding","staff of curing","staff of striking","staff of turning (undead)","mace of disruption","sling of seeking","ring of regeneration","ring of spell storing (cleric spells only)"];
function itemGen(theClass,level) {
    let eRoll1,eList;
    let mList = "";
    function secWpn() {
        if (rollDie(1,2) < 2) {
            eList += ", " + fightEquip2[rollDie(0,2)];
        }
    }
    let clericSel = [["weapon","armor",misc1],[misc1,potions1,rings1],[misc2,potions2,clerItem]];
    let fightSel = [["weapon","armor",misc1],[misc1,potions1,rings1],[potions1,rings1,fightItem],[potions2,rings2,fightItem]];
    let muserSel = [[misc1,rings1,potions1],[rings1,potions1,wands1],[misc2,potions2,wands1],[misc2,rings2,wands2]];
    let thiefSel = [["weapon","armor",misc1],[misc1,potions1,rings1],[misc2,"swords",potions1],[misc2,"swords",potions2]];
    function itemCaller(thing) {
        switch (thing) {
            case misc1:
                let roll = rollDie(0,9);
                if (roll === 9) {
                    return "ring: " + rings1[rollDie(0,9)];
                } else if (roll === 8) {
                    return "potion: " + potions1[rollDie(0,9)];
                } else {
                    return misc1[roll];
                }
            case "weapon":
                return "first weapon becomes +1 item";
            case "armor":
                let item = "armor or shield becomes +1 item";
                if (theClass === "monk") {
                    item = "ring: protection +1";
                }
                if (theClass === "thief" || theClass === "assassin") {
                    item += " (thieves/assassins with no armor and no shield get +1 leather armor)";
                }
                return item;
            case "swords":
                let sharp;
                let sharpRoll = rollDie(1,3);
                if (theClass === "halfling") {
                    sharpRoll = 1;
                }
                if (sharpRoll < 2) {
                    sharp = "short sword: ";
                } else if (sharpRoll > 2) {
                    sharp = "long sword: ";
                } else {
                    sharp = "broad sword: ";
                }
                sharp += swordItem[rollDie(0,9)];
                return sharp;
            case rings1:
            case rings2:
                return "ring: " + thing[rollDie(0,9)];
            case wands1:
            case wands2:
                return "wand: " + thing[rollDie(0,9)];
            case potions1:
            case potions2:
                return "potion: " + thing[rollDie(0,9)];
            default:
                return thing[rollDie(0,9)];
        }
    }
    //determine equipment
    switch (theClass) {
        case "fighter":
            eRoll1 = rollDie(0,5);
            eList = fightEquip[eRoll1];
            if (eRoll1 > 3) {
                secWpn();
            } else {
                if (rollDie(1,2) < 2) {
                    eList += ", shield";
                } else {
                    secWpn();
                }
            }
            eList += ", " + fightArmr[rollDie(0,2)] + " armor";
            break;
        case "ranger":
        case "elf":
            eList = elfEquip[rollDie(0,4)];
            if (rollDie(1,2) < 2) {
                eList += ", shield";
            }
            eList += ", " + fightArmr[rollDie(0,2)] + " armor";
            break;
        case "dwarf":
            eList = dwarfEquip[rollDie(0,4)];
            if (rollDie(1,2) < 2) {
                eList += ", shield";
            }
            eList += ", " + fightArmr[rollDie(0,2)] + " armor";
            break;
        case "halfling":
            eRoll1 = rollDie(0,5);
            eList = halfEquip[eRoll1];
            if (eRoll1 < 4) {
                if (rollDie(1,2) < 2) {
                    eList += ", shield";
                }
            }
            eList += ", " + fightArmr[rollDie(0,2)] + " armor";
            break;
        case "cleric":
            eRoll1 = rollDie(1,10);
            if (eRoll1 > 9) {
                eList = "sling, leather armor";
            } else {
                eList = clericEquip[rollDie(0,2)];
                eList += ", " + fightArmr[rollDie(0,2)] + " armor";
            }
            eList += ", " + clericEquip[rollDie(3,5)];
            break;
        case "druid":
            eList = druidEquip[rollDie(0,4)];
            if (rollDie(1,2) < 2) {
                eList += ", leather armor";
            }
            break;
        case "muser":
            eList = magEquip1[rollDie(0,9)];
            eList += ", " + magEquip2[rollDie(0,2)];
            break;
        case "thief":
        case "assassin":
            eList = thiefEquip[rollDie(0,4)];
            eList += ", " + thiefEquip[rollDie(5,7)];
            if (rollDie(1,2) < 2) {
                eList += ", leather armor";
            }
            if (theClass === "thief") {
                eList += ", thieves' tools";
            }
            if (theClass === "assassin") {
                if (rollDie(1,2) < 2) {
                    eList += ", shield";
                }
            }
            break;
        case "monk":
            eList = monkEquip[rollDie(0,9)];
    }
    //determine magic items
    switch (theClass) {
        case "cleric":
            if (level < 4) {
                mList += itemCaller(clericSel[0][rollDie(0,2)]);
            } else if (level < 7) {
                mList += itemCaller(clericSel[0][rollDie(0,2)]) + ", " + itemCaller(clericSel[1][rollDie(0,2)]);
            } else if (level < 10) {
                mList += itemCaller("weapon") + ", " + itemCaller("armor") + ", " + itemCaller(clericSel[2][rollDie(0,2)]);
            } else {
                mList += itemCaller("weapon") + ", " + itemCaller("armor") + ", " + itemCaller(clericSel[1][rollDie(0,2)]) + ", " + itemCaller(clericSel[2][rollDie(0,2)]);
            }
            break;
        case "fighter":
        case "ranger":
        case "monk":
        case "dwarf":
            if (level < 4) {
                mList += itemCaller(fightSel[0][rollDie(0,2)]);
            } else if (level < 7) {
                mList += itemCaller(fightSel[0][rollDie(0,2)]) + ", " + itemCaller(fightSel[1][rollDie(0,2)]);
            } else if (level < 10) {
                mList += itemCaller("weapon") + ", " + itemCaller("armor") + ", " + itemCaller(fightSel[2][rollDie(0,2)]);
            } else {
                mList += itemCaller("weapon") + ", " + itemCaller("armor") + ", " + itemCaller(fightSel[3][rollDie(0,2)]);
            }
            break;
        case "muser":
        case "elf":
        case "druid":
            if (level < 4) {
                mList += itemCaller(muserSel[0][rollDie(0,2)]);
            } else if (level < 7) {
                mList += itemCaller(muserSel[0][rollDie(0,2)]) + ", " + itemCaller(muserSel[1][rollDie(0,2)]);
            } else if (level < 10) {
                mList += itemCaller("weapon") + ", ring: protection +1, " + itemCaller(muserSel[0][rollDie(0,2)]) + ", " + itemCaller(muserSel[2][rollDie(0,2)]);
            } else {
                mList += itemCaller("weapon") + ", ring: protection +1, " + itemCaller(muserSel[2][rollDie(0,2)]) + ", " + itemCaller(muserSel[3][rollDie(0,2)]);
            }
            break;
        case "thief":
        case "assassin":
        case "halfling":
            if (level < 4) {
                mList += itemCaller(thiefSel[0][rollDie(0,2)]);
            } else if (level < 7) {
                mList += itemCaller(thiefSel[0][rollDie(0,2)]) + ", " + itemCaller(thiefSel[1][rollDie(0,2)]);
            } else if (level < 10) {
                mList += itemCaller("weapon") + ", " + itemCaller("armor") + ", " + itemCaller(thiefSel[2][rollDie(0,2)]);
            } else {
                mList += itemCaller("weapon") + ", " + itemCaller("armor") + ", " + itemCaller(thiefSel[3][rollDie(0,2)]);
            }
    }
    return [eList,mList];
}
$("#itemRoll").click(function () {
    let level = parseInt($("input[name=lvlPck]:checked").val());
    let theClass = $("#classPck").val();
    let result = itemGen(theClass,level);
    document.getElementById("equipRslt").innerHTML = result[0];
    document.getElementById("itemRslt").innerHTML = result[1];
});