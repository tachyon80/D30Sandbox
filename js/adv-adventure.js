//Adventure Generator
function trigger() {
    let result = rollDie(0,29);
    let collec = ["accusation","ambush","apparition","attack","conversation","destruction of object","diary","drawing","dream","encounter w/ NPC","escape","manuscript","map","message","item, exotic","item, mundane","oracle","plea","prophecy","public notice","reconnaissance","request","summoned by group","survivor","symbol","teleportation","transaction","trap","vision","warning"];
    document.getElementById("trigger").innerHTML = collec[result];
}
function goal() {
    let result = rollDie(0,29);
    let collec = ["aid other hero(es)","break curse affecting persons(s)","break curse affecting location","capture fugitive","deal with growing threat","defend location","deliver message/object","discover secret","escort/protect object(s)/person(s)","investigate location","locate/track down NPC (ally/hero/villain)","maintain peace","prevent invasion","rally ally(allies)/form allegiance(s)","reclaim lost location (regain control of)","release person/creature from burden","rescue/free captive(s)/slave","root out spies/minions of evil","search for knowledge/evidence","solve mystery - disappearance of object","solve mystery - disappearance of person(s)","solve mystery - murder/death","solve mystery - theft","solve mystery - phenomenon","stop conflict","stop impending devastation","stop plot from coming to fruition","stop raids on location","stop strange phenomenon affecting location","stop villain from amassing power"];
    document.getElementById("goal").innerHTML = collec[result];
}
function obstacle() {
    let result = rollDie(0,29);
    let collec = ["acquire item","acquire knowledge","acquire key(s)/parts","awaken sleeping NPC","beat time limitation","clear name(s)/restore honor","compete in tournament","complete scavenger hunt","destroy item","escape location","explore location","find hidden/lost entrance","find hidden/lost location","find magic item/object","find way back to key location","fight for freedom","fix 'broken' item","make long journey","make perilous journey","navigate labyrinth","navigate series of portals","pass series of tests","perform ritual","restore condition","race against antagonist(s)","reveal conspiracy","revive deceased NPC","solve puzzle/riddles","speak incantation","stop ritual"];
    document.getElementById("obstacle").innerHTML = collec[result];
}
function locat() {
    let result = rollDie(0,29);
    let collec = ["abbey","burial ground","catacombs","castle","cave/cavern","cemetery","chasm","citadel/keep","city","dungeon","farmstead","fortress","forest","hamlet","hill","island","mansion","mountain","outpost","palace","ruins","stronghold","temple","thorpe","tomb","tower","town","undercity","village","volcano"];
    document.getElementById("location").innerHTML = collec[result];

}
function locatFeat() {
    let result = rollDie(0,29);
    let collec = ["altar","barracks","bridge","chapel","dais","door","fountain","garden","gallery","gate","plaza","laboratory","library","machine, clockwork","machine, magical","painting","pedestal","pit","pool","portal","sanctuary","sarcophagus","statue/idol","shrine","statuary","tapestry","throne","waterfall","well","workshop"];
    document.getElementById("locatFeature").innerHTML = collec[result];
}
function phenom() {
    let result = rollDie(0,29);
    let collec = ["charm","darkness","decay","delusion","disease","disembodied voices","energy drain (hp)","energy drain (level)","fear","fever","fog/mist","fungi/mold/slime","hallucinations","hauntings","lights/colors","loss of memory","mania","monster plague","nightmares","noises/sounds","panic/paranoia","paralyzation","poisoning(s)","shadows","sickness","sightings of dead","sleep","strange vegetation","strange weather","transformation"];
    document.getElementById("phenom").innerHTML = collec[result];
}
function villainGoal() {
    let result = rollDie(0,29);
    let collec = ["amusement/boredom","avoid loss/pain","corruption","debt owed","derangement/insanity","destiny","domination/control","eliminate species","enslavement","envy","experimentation","fear","forgotten reason","guilt","greed","hatred","honor","immortality","ideology (strange)","loyalty (misplaced)","mass destruction","mischief","noble goal, extreme measures","power","pride/vanity","pure evil","revenge","self-preservation/survival","serves higher ‘boss’","utopia (at all costs)"];
    document.getElementById("villain").innerHTML = collec[result];
}
function artifactRelic() {
    let result = rollDie(0,29);
    let collec = ["amulet","bowl/brazier/censer","box","bracers","candle","codex/manual/tome","cube","cup","figurine/idol","flask","gem/jewel","grimoire","horn/instrument","mask","medallion","mirror","necklace","orb/sphere","pearl","potion","ring","rod","scarab","scepter","spellbook","staff","stone","talisman","wand","weapon"];
    document.getElementById("artifact").innerHTML = collec[result];
}
function theTheme() {
    let result = rollDie(0,29);
    let collec = ["blood","darkness/night","death","destiny","doom","freedom","forbidden","enchantment","evil","flame(s)","glory","gold","greed","innocence","immortality","judgement","justice","life","light/day","madness","mystery","power","rebirth","revenge","shadow","terror","treasure","vengeance","wonder","wrath"];
    document.getElementById("theme").innerHTML = collec[result];
}
function keyNpc() {
    let result = rollDie(0,29);
    let collec = ["cleric","druid (Oe/1e) / cleric (BX)","fighter","paladin (Oe/1e) / fighter (BX)","ranger (Oe/1e) / dwarf (BX)","magic-user","illusionist/magic-user","thief","assassin (Oe/1e) / halfling (BX)","monk (Oe/1e) / elf (BX)","animal trainer","hermit","merchant -","misc. NPC -","pilgrim (as 1st-level cleric)","sage -","scribe","spy (as thief)","smith","tradesman -","king","queen","queen mother","noble","noble household","noble teacher","castle employee","soldier","slave","peasant"];
    let final = collec[result];
    if (result === 15) { //sage
        final += " <span id=\"sageInfo\"></span>";
    } else if (result === 12 || result === 13 || result === 19) {
        final += " <span id='occupationInfo'></span>";
    }
    document.getElementById("keynpc").innerHTML = final;
    switch (result) {
        case 15:
            sageGen();
            break;
        case 12:
            jobMaker("merchant");
            break;
        case 13:
            jobMaker("misc");
            break;
        case 19:
            jobMaker("tradesman");
            break;
    }
}
$("#advRoll").click(function () {
    trigger();
    goal();
    obstacle();
    locat();
    locatFeat();
    phenom();
    villainGoal();
    artifactRelic();
    theTheme();
    keyNpc();
});