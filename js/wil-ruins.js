// ruins generator page 19
let ruinType = ["hovel","villa","tower","altar","tomb","crypt","bunker","hamlet","small castle","small city","hut","manor","keep","shrine","vault","catacombs","blockhouse","village","medium castle","medium city","cottage","palace","citadel","temple","mausoleum","sewer","garrison","town","large castle","large city"];
let character = ["burned/charred","collapsed/crumbling","covered in vines/sand/rocks (per terrain type)","disfigured/vandalized","moldy/contaminated (for desert, burned/charred)","sunken","burned/charred and disfigured/destroyed","covered in vines/sand/rocks and moldy/contaminated","sunken and covered in vines/sand/rocks","sunken and collapsed/crumbling and covered"];
let degree = ["slightly/barely","moderately/noticeably","severely/extremely"];
let inhabSize = ["nuisance","infested","overrun"];
let inhabType = ["chimeras","humanoids &mdash; ","humans","insects","lycanthropes","magical","mammals","molds/slimes/jellies","reptiles/reptilians","undead"];
let inhabList = [["","harpies","centaurs","minotaurs","medusae","satyrs","cockatrices","manticores","lammasus","lamias","chimeras","sphinxes"],[null],["by level..."],["giant centipedes","giant ants","giant beetles","giant spiders","giant wasps","giant scorpions"],["","wererats","werewolves","wereboars","weretigers","werebears","devil swines"],["stirges","gargoyles","living statues","blink dogs","basilisks","","rust monsters","invisible stalkers","rakshasa","salamanders","djinn","efreet","ropers","giant slugs","purple worms"],["badgers","wolves","dire wolves","giant skunks","giant porcupines"],["yellow mold","green slime","","gray ooze","gelatinous cube","ochre jelly","","","","black puddings"],["spitting cobras","pit vipers","giant rattlers","rock pythons","giant lizards","hydras","wyverns","nagas","white dragons","black dragons","green dragons","blue dragons","red dragons","gold dragons"],["skeletons","zombies","ghouls","wights","wraiths","mummies","spectres","vampires","","ghosts","","lich(es)"]];
let humList1 = ["kobolds","goblins"];
let humList2 = ["orcs","hobgoblins","gnolls","lizard men","troglodytes"];
let humList3 = ["","bugbears","","ogres","ogre magi","trolls","","hill giants","stone giants","frost giants","fire giants","cyclopses","cloud giants","storm giants"];
let mRow = document.getElementById("monsterRow");
let cells = $(mRow).children().slice(1);
let mTitle = mRow.firstElementChild;
let i;
let prntList = [];
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
            mTitle.innerHTML = "humanoids, small";
            prntList = humList1;
        } else if (humRoll > 2) {
            inhabDescrip += "human-sized";
            mTitle.innerHTML = "humanoids, medium";
            prntList = humList2;
        } else {
            inhabDescrip += "giant-class";
            mTitle.innerHTML = "humanoids, giant";
            prntList = humList3;
        }
    } else {
        mTitle.innerHTML = inhabType[inhabRoll];
        prntList = inhabList[inhabRoll];
    }
    document.getElementById("inhabRslt").innerHTML = inhabDescrip;
    for (i=0;i<cells.length;i++) {
        cells[i].innerHTML = "";
    }
    for (i=0;i<prntList.length;i++) {
        cells[i].innerHTML = prntList[i];
    }
    $("#monsterTbl").removeClass("hideIt");
});