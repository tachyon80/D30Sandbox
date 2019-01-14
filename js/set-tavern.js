//tavern generator pages 36 & 37
let tavName = [["solitary","lone","two","three","four","five","seven","nine","ten","twelve","king's","queen's","noble","royal","brass","bronze","copper","gold(en)","platinum","silver","black","blue","crimson","gray","green","purple","rose","scarlet","white","yellow"],["angry","barking","bawdy","belching","bitter","crying","cheerful","cranky","dancing","drunken","fallen","friendly","happy","hungry","jolly","laughing","leering","lonely","nosy","proud","quiet","raving","salty","screaming","sleeping","snarling","starving","tired","winking","zealous"],["bright","blind","bloody","bold","bouncing","busy","chequered","dark","dirty","dusty","flying","fiery","filthy","flaming","frozen","hairy","humble","idle","pale","radiant","rusty","old","polished","shining","slippery","smoking","stinking","stone","striped","young"],["acolyte","angel","archer","bachelor","bard","baron","beggar","bishop","brigand","buccaneer","burglar","captain","cardinal","cavalier","dervish","duke","earl","enchanter","footman","friar","guard","jester","judge","hero","horseman","king","knave","knight","lancer","lord"],["mage","magician","maid","merchant","mistress","monk","nomad","nun","paladin","pirate","priest","prince","princess","queen","robber","scout","sharper","sheriff","sorcerer","swordsman","thief","traveler","trickster","vagabond","veteran","vicar","virgin","wanderer","warlock","wizard"],["badger","bear","beaver","boar","cock","dog","eagle","fox","frog","hound","horse","jackal","lamb","leopard","lion","lizard","monkey","ostrich","peacock","pig","porcupine","salamander","snake","spider","swan","tiger","toad","weasel","wolf","wolverine"],["basilisk","brownie","centaur","cockatrice","cyclops","dragon","dwarf","elf","gargoyle","ghost","giant","gnome","goblin","gorgon","griffon","halfling","harpy","hippogriff","hyrdra","kobold","leprechaun","minotaur","ogre","orc","pixie","satyr","sphinx","sprite","troll","unicorn"],["arrow","axe","bow","buckler","catapult","club","crossbow","dagger","dart","flail","gauntlet","halberd","hammer","helm","hilt","javelin","lance","mace","pick","pike","pollaxe","rapier","sabre","scabbard","scythe","sheath","shield","sickle","spear","sword"],["barrel","bridge","bucket","bush","castle","cauldron","crown","citadel","cup","flagon","field","garden","gate","hand","key","leaf","mug","plate","pantry","paw","purse","rose","scepter","scroll","skull","staff","star","tree","wheel","windmill"]];
let tavKey = [[3,3],[4,4],[5,5],[6,6],[7,7],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[3,4],[5,6],[7,8],[5,7],[3,7],[4,7],[4,8]];
$("#tavRoll").click(function () {
    //make tavern name
    let namRoll1 = rollDie(0,29);
    let namRoll2 = rollDie(0,29);
    let namRoll3,namTxt2;
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
});