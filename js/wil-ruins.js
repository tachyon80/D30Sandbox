// ruins generator page 19
let ruinType = ["hovel","villa","tower","altar","tomb","crypt","bunker","hamlet","small castle","small city","hut","manor","keep","shrine","vault","catacombs","blockhouse","village","medium castle","medium city","cottage","palace","citadel","temple","mausoleum","sewer","garrison","town","large castle","large city"];
let character = ["burned/charred","collapsed/crumbling","covered in vines/sand/rocks (per terrain type)","disfigured/vandalized","moldy/contaminated (for desert, burned/charred)","sunken","burned/charred and disfigured/destroyed","covered in vines/sand/rocks and moldy/contaminated","sunken and covered in vines/sand/rocks","sunken and collapsed/crumbling and covered"];
let degree = ["slightly/barely","moderately/noticeably","severely/extremely"];
let inhabSize = ["nuisance","infested","overrun"];
let inhabType = ["chimeras","humanoids &mdash; ","humans","insects","lycanthropes","magical","mammals","molds/slimes/jellies","reptiles/reptilians","undead"];
$("#ruinRoll").click(function () {
    let inhabRoll = rollDie(0,9);
    let inhabDescrip = inhabType[inhabRoll];
    document.getElementById("typeRslt").innerHTML = ruinType[rollDie(0,29)];
    document.getElementById("characRslt").innerHTML = degree[rollDie(0,2)] + " " + character[rollDie(0,9)];
    document.getElementById("numRslt").innerHTML = inhabSize[rollDie(0,2)];
    if (inhabRoll === 1) {
        let humRoll = rollDie(1,3);
        if (humRoll < 2) {
            inhabDescrip += "small-sized";
        } else if (humRoll > 2) {
            inhabDescrip += "human-sized";
        } else {
            inhabDescrip += "giant-class";
        }
    }
    document.getElementById("inhabRslt").innerHTML = inhabDescrip;
});