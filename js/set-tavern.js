//tavern generator pages 36 & 37
let tavName = [["solitary","lone","two","three","four","five","seven","nine","ten","twelve","king's","queen's","noble","royal","brass","bronze","copper","gold(en)","platinum","silver","black","blue","crimson","gray","green","purple","rose","scarlet","white","yellow"],["angry","barking","bawdy","belching","bitter","crying","cheerful","cranky","dancing","drunken","fallen","friendly","happy","hungry","jolly","laughing","leering","lonely","nosy","proud","quiet","raving","salty","screaming","sleeping","snarling","starving","tired","winking","zealous"],["bright","blind","bloody","bold","bouncing","busy","chequered","dark","dirty","dusty","flying","fiery","filthy","flaming","frozen","hairy","humble","idle","pale","radiant","rusty","old","polished","shining","slippery","smoking","stinking","stone","striped","young"],["acolyte","angel","archer","bachelor","bard","baron","beggar","bishop","brigand","buccaneer","burglar","captain","cardinal","cavalier","dervish","duke","earl","enchanter","footman","friar","guard","jester","judge","hero","horseman","king","knave","knight","lancer","lord"],["mage","magician","maid","merchant","mistress","monk","nomad","nun","paladin","pirate","priest","prince","princess","queen","robber","scout","sharper","sheriff","sorcerer","swordsman","thief","traveler","trickster","vagabond","veteran","vicar","virgin","wanderer","warlock","wizard"],["badger","bear","beaver","boar","cock","dog","eagle","fox","frog","hound","horse","jackal","lamb","leopard","lion","lizard","monkey","ostrich","peacock","pig","porcupine","salamander","snake","spider","swan","tiger","toad","weasel","wolf","wolverine"],["basilisk","brownie","centaur","cockatrice","cyclops","dragon","dwarf","elf","gargoyle","ghost","giant","gnome","goblin","gorgon","griffon","halfling","harpy","hippogriff","hyrdra","kobold","leprechaun","minotaur","ogre","orc","pixie","satyr","sphinx","sprite","troll","unicorn"],["arrow","axe","bow","buckler","catapult","club","crossbow","dagger","dart","flail","gauntlet","halberd","hammer","helm","hilt","javelin","lance","mace","pick","pike","pollaxe","rapier","sabre","scabbard","scythe","sheath","shield","sickle","spear","sword"],["barrel","bridge","bucket","bush","castle","cauldron","crown","citadel","cup","flagon","field","garden","gate","hand","key","leaf","mug","plate","pantry","paw","purse","rose","scepter","scroll","skull","staff","star","tree","wheel","windmill"]];
let tavKey = [[3,3],[4,4],[5,5],[6,6],[7,7],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[3,4],[5,6],[7,8],[5,7],[3,7],[4,7],[4,8]];
let bldg = ["1-story, timber","1-story, timber and brick","1-story, timber and stone","1-story, stone","1-story, brick","2-story, timber","2-story, timber and brick","2-story, timber and stone","2-story, stone","2-story, brick"];
let aged = ["new","'worn in'","old"];
let rooms = ["hammocks in main room","cots in main room","small rooms w/ straw mattresses","cots in main room","small rooms w/ straw mattresses","med. rooms w/ straw mattresses","small rooms w/ straw mattresses","small rooms w/ feather mattresses","med. rooms w/ straw mattresses","med. rooms w/ feather mattresses","large rooms w/ straw mattresses","large rooms w/ feather mattresses"];
let feature = ["ceiling - vaulted","ceiling - low (claustrophobic)","collection - tankards","collection - exotic drinking vessels","collection - obscure animal skeletons","collection - paintings","collection - statues","doors - elaborate ironwork hardware","doors - painted red","exterior -  garden","exterior -  well-groomed hedges","exterior -  salvaged stone wall","floor - tile mosaic","furniture - very old, but well-crafted","furniture - dwarven construction","furniture - elven construction","furniture - exotic/embellished","furniture - inscribed w/ runes","lighting - excess of tiny candles","lighting - magical torches","lighting - elaborate chandelier ","misc. - ornate cauldron","over hearth - skull, dragon (or by tavern name)","over hearth - exotic weapons","over hearth - painting of a","roof - slate","roof - red tile","windows - leaded glass","windows - stained glass","windows - complete lack of"];
let races = ["dwarf","elf","halfling","other"];
let races2 = ["half elf (or elf)","half orc (or human)","gnome (or halfling)"];
let looks = ["cleric","sage/wizard","warrior/soldier","wanderer/rogue"];
let knownFor = ["drink - quality of ales","drink - quality of wines","drink - selection","drink - strength","drink - weakness","drink - weird/odd selections","food - small portions","food - large portions","food - quality","food - unique/outstanding","food - unique/weird","patrons - strange/odd","patrons - mages","patrons - veterans","patrons - criminals/thieves","patrons - demi-humans","patrons - reserved","patrons - unruly","patrons - drunken women","prejudiced - toward dwarves","prejudiced - toward elves","prejudiced - toward halflings","prejudiced - to all non-humans","prostitutes - beautiful","prostitutes - heinous","prostitutes - exotic","entertainment - bizarre games","entertainment - drinking contests","entertainment - fighting","entertainment - talented minstrels"];
let foods = ["ale-baked beef stuffed with onion and bacon","beef & wine pie","beef roll in mustard sauce","beef tenderloin in garlic sauce","chicken in thick wine sauce","five-spice barbecue roast","hare hash","lamb simmered with almonds and spices","lamb stew thickened with honey","lamb stewed with herbs and fruits","liver sausage custard pie","mutton shoulder with oysters","oxtail stewed with leeks, onions, and carrots","pork, chicken, and rabbit pie","pork dumplings in meat sauce","pork in wine, egg, and pepper sauce","pork meatballs in almond milk","pork pie with eggs, honey, and spices","rabbit in ginger sauce","rabbit in wine-currant sauce","roast beef in orange sauce","roast pig stuff with cheese and chestnuts","rolled stuffed steak, baked in sauce","sausages sautéed in sherry","sheep tongue with onions","spiced pork with oranges & onions","stewed beef ribs","veal pie with herbs, dates, and eggs","venison soup with wine & spices","venison ribs in wine"];
$("#tavRoll").click(function () {
    let roomRoll = rollDie(0,29);
    let namRoll3,namTxt2,roomTxt,isStable,isBath,reputTxt,reputRoll;
    //make tavern name
    let namRoll1 = rollDie(0,29);
    let namRoll2 = rollDie(0,29);
    let selector = tavKey[namRoll1];
    let namTxt1 = tavName[selector[0]][namRoll2];
    if (namRoll1 > 26) {
        namTxt1 += "'s"
    }
    namTxt1 = capitalize(namTxt1);
    if (namRoll1 < 5) {
        do {
            namRoll3 = rollDie(0,29);
        }
        while (namRoll2 === namRoll3);
    } else {
        namRoll3 = rollDie(0,29);
    }
    namTxt2 = tavName[selector[1]][namRoll3];
    namTxt2 = capitalize(namTxt2);
    document.getElementById("namTitle").innerHTML = namTxt1 + " " + namTxt2;
    //accommodations
    document.getElementById("bldgTitle").innerHTML = bldg[rollDie(0,9)];
    document.getElementById("ageTitle").innerHTML = aged[rollDie(0,2)];
    if (roomRoll < 4) {
        roomTxt = rooms[0];
    } else if (roomRoll < 7) {
        roomTxt = rooms[1];
    } else if (roomRoll < 10) {
        roomTxt = rooms[2];
    } else if (roomRoll < 14) {
        roomTxt = rooms[3];
    } else if (roomRoll < 17) {
        roomTxt = rooms[4];
    } else if (roomRoll < 20) {
        roomTxt = rooms[5];
    } else if (roomRoll < 22) {
        roomTxt = rooms[6];
    } else if (roomRoll < 24) {
        roomTxt = rooms[7];
    } else if (roomRoll < 26) {
        roomTxt = rooms[8];
    } else if (roomRoll < 28) {
        roomTxt = rooms[9];
    } else if (roomRoll === 28) {
        roomTxt = rooms[10];
    } else {
        roomTxt = rooms[11];
    }
    if (roomRoll < 10) {
        roomTxt = "Poor Accommodations - " + roomTxt;
        if (rollDie(1,3) < 2) {
            roomTxt += " with stable(s)";
        }
    } else if (roomRoll <20) {
        roomTxt = "Common Accommodations - " + roomTxt;
        if (rollDie(1,3) < 3) {
            isStable = true;
        }
        if (rollDie(1,3) < 2) {
            isBath = true;
        }
        if (isBath || isStable) {
            roomTxt += " with ";
        }
        if (isStable) {
            roomTxt += "stable(s)";
        }
        if (isBath && isStable) {
            roomTxt += " and ";
        }
        if (isBath) {
            roomTxt += "a bath house";
        }
    } else {
        roomTxt = "Good Accommodations - " + roomTxt;
        roomTxt += " with stable(s)";
        if (rollDie(1,3) < 3) {
            roomTxt += " and a bath house";
        }
    }
    document.getElementById("roomTitle").innerHTML = roomTxt;
    //physical features
    reputRoll = rollDie(0,29);
    reputTxt = feature[reputRoll];
    if (reputRoll === 24) {
        let raceRoll = rollDie(0,9);
        if (raceRoll === 1) {
            reputTxt += "n";
        }
        if (raceRoll > 3) {
            reputTxt += " human";
        } else {
            let reputTxt2 = races[raceRoll];
            if (reputTxt2 === "other") {
                reputTxt2 = races2[rollDie(0,2)];
            }
            reputTxt += " " + reputTxt2 + " ";
        }
        let lookRoll = rollDie(1,9);
        if (lookRoll < 3) {
            reputTxt += looks[0];
        } else if (lookRoll < 5) {
            reputTxt += looks[1];
        } else if (lookRoll < 7) {
            reputTxt += looks[3];
        } else {
            reputTxt += looks[2];
        }
    }
    document.getElementById("featTitle").innerHTML = reputTxt;
    //reputation
    document.getElementById("reputTitle").innerHTML = "Tavern is known for " + knownFor[rollDie(0,29)];
    //food
    document.getElementById("foodTitle").innerHTML = "Featured main dish - " + foods[rollDie(0,29)];
});